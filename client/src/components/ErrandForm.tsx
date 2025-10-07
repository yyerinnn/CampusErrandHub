import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertErrandRequestSchema, type InsertErrandRequest } from "@shared/schema";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { CheckCircle2, Send } from "lucide-react";

export default function ErrandForm() {
  const { toast } = useToast();
  const [isSuccess, setIsSuccess] = useState(false);
  
  const form = useForm<InsertErrandRequest>({
    resolver: zodResolver(insertErrandRequestSchema),
    defaultValues: {
      date: "",
      time: "",
      location: "",
      content: "",
      name: "",
      department: "",
      phone: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertErrandRequest) => {
      return await apiRequest("POST", "/api/errand-requests", data);
    },
    onSuccess: () => {
      setIsSuccess(true);
      form.reset();
      toast({
        title: "신청이 완료되었습니다!",
        description: "곧 연락드릴게요. 조금만 기다려주세요! 😊",
      });
      setTimeout(() => setIsSuccess(false), 3000);
    },
    onError: () => {
      toast({
        title: "오류가 발생했습니다",
        description: "다시 시도해주세요.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertErrandRequest) => {
    mutation.mutate(data);
  };

  if (isSuccess) {
    return (
      <Card className="p-8 md:p-12 text-center space-y-6" id="errand-form">
        <div className="flex justify-center">
          <div className="w-16 h-16 bg-chart-1/10 rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8 text-chart-1" />
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold">신청 완료!</h3>
          <p className="text-muted-foreground">
            심부름 신청이 성공적으로 접수되었습니다.
            <br />
            빠른 시일 내에 연락드리겠습니다!
          </p>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6 md:p-8" id="errand-form">
      <div className="mb-6 space-y-2">
        <h3 className="text-2xl font-bold">심부름 신청하기</h3>
        <p className="text-muted-foreground">
          필요한 정보를 입력해주시면 빠르게 도와드릴게요!
        </p>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="date" className="text-sm font-medium">
              필요 날짜 <span className="text-destructive">*</span>
            </Label>
            <Input
              id="date"
              type="date"
              {...form.register("date")}
              className="w-full"
              data-testid="input-date"
            />
            {form.formState.errors.date && (
              <p className="text-sm text-destructive">{form.formState.errors.date.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="time" className="text-sm font-medium">
              필요 시간 <span className="text-destructive">*</span>
            </Label>
            <Input
              id="time"
              type="time"
              {...form.register("time")}
              className="w-full"
              data-testid="input-time"
            />
            {form.formState.errors.time && (
              <p className="text-sm text-destructive">{form.formState.errors.time.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="location" className="text-sm font-medium">
            필요 장소 <span className="text-destructive">*</span>
          </Label>
          <Input
            id="location"
            placeholder="예: 중앙도서관 앞, 공대 3호관"
            {...form.register("location")}
            className="w-full"
            data-testid="input-location"
          />
          {form.formState.errors.location && (
            <p className="text-sm text-destructive">{form.formState.errors.location.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="content" className="text-sm font-medium">
            심부름 내용 <span className="text-destructive">*</span>
          </Label>
          <Textarea
            id="content"
            placeholder="어떤 심부름이 필요하신가요? 자세히 적어주세요."
            {...form.register("content")}
            className="w-full min-h-[120px] resize-none"
            data-testid="input-content"
          />
          {form.formState.errors.content && (
            <p className="text-sm text-destructive">{form.formState.errors.content.message}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium">
              이름 <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              placeholder="홍길동"
              {...form.register("name")}
              className="w-full"
              data-testid="input-name"
            />
            {form.formState.errors.name && (
              <p className="text-sm text-destructive">{form.formState.errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="department" className="text-sm font-medium">
              학과 <span className="text-destructive">*</span>
            </Label>
            <Input
              id="department"
              placeholder="컴퓨터공학과"
              {...form.register("department")}
              className="w-full"
              data-testid="input-department"
            />
            {form.formState.errors.department && (
              <p className="text-sm text-destructive">{form.formState.errors.department.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-sm font-medium">
            전화번호 <span className="text-destructive">*</span>
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="010-1234-5678"
            {...form.register("phone")}
            className="w-full"
            data-testid="input-phone"
          />
          {form.formState.errors.phone && (
            <p className="text-sm text-destructive">{form.formState.errors.phone.message}</p>
          )}
        </div>

        <Button 
          type="submit" 
          size="lg" 
          className="w-full text-base"
          disabled={mutation.isPending}
          data-testid="button-submit-errand"
        >
          {mutation.isPending ? (
            "신청 중..."
          ) : (
            <>
              신청하기
              <Send className="ml-2 w-5 h-5" />
            </>
          )}
        </Button>
      </form>
    </Card>
  );
}
