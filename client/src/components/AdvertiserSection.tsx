import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertAdvertiserRequestSchema, type InsertAdvertiserRequest } from "@shared/schema";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Megaphone, CheckCircle2, TrendingUp } from "lucide-react";

export default function AdvertiserSection() {
  const { toast } = useToast();
  const [isSuccess, setIsSuccess] = useState(false);
  
  const form = useForm<InsertAdvertiserRequest>({
    resolver: zodResolver(insertAdvertiserRequestSchema),
    defaultValues: {
      companyName: "",
      ceoName: "",
      phone: "",
      email: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertAdvertiserRequest) => {
      return await apiRequest("POST", "/api/advertiser-requests", data);
    },
    onSuccess: () => {
      setIsSuccess(true);
      form.reset();
      toast({
        title: "광고 신청이 완료되었습니다!",
        description: "담당자가 빠르게 연락드리겠습니다.",
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

  const onSubmit = (data: InsertAdvertiserRequest) => {
    mutation.mutate(data);
  };

  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-chart-2/10 rounded-full text-sm font-medium text-chart-2">
              <Megaphone className="w-4 h-4" />
              <span>광고주 모집</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold">
              대학생들에게
              <br />
              직접 다가가세요
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-chart-1/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <TrendingUp className="w-4 h-4 text-chart-1" />
                </div>
                <div>
                  <p className="font-semibold">타겟 마케팅</p>
                  <p className="text-muted-foreground">대학생 고객에게 효과적으로 도달</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">합리적인 광고비</p>
                  <p className="text-muted-foreground">캠퍼스 특화 광고 솔루션</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-chart-3/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Megaphone className="w-4 h-4 text-chart-3" />
                </div>
                <div>
                  <p className="font-semibold">높은 전환율</p>
                  <p className="text-muted-foreground">실제 사용자 기반 광고 효과</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="p-6 md:p-8">
            {isSuccess ? (
              <div className="text-center space-y-6 py-8">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-chart-1/10 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-chart-1" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">신청 완료!</h3>
                  <p className="text-muted-foreground">
                    광고 신청이 성공적으로 접수되었습니다.
                    <br />
                    빠른 시일 내에 연락드리겠습니다!
                  </p>
                </div>
              </div>
            ) : (
              <>
                <div className="mb-6 space-y-2">
                  <h3 className="text-2xl font-bold">광고 신청하기</h3>
                  <p className="text-muted-foreground">
                    광고 문의를 남겨주시면 상담해드립니다
                  </p>
                </div>

                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="companyName" className="text-sm font-medium">
                      기업명 <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="companyName"
                      placeholder="(주)캠퍼스"
                      {...form.register("companyName")}
                      className="w-full"
                      data-testid="input-company-name"
                    />
                    {form.formState.errors.companyName && (
                      <p className="text-sm text-destructive">{form.formState.errors.companyName.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="ceoName" className="text-sm font-medium">
                      대표자명 <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="ceoName"
                      placeholder="김대표"
                      {...form.register("ceoName")}
                      className="w-full"
                      data-testid="input-ceo-name"
                    />
                    {form.formState.errors.ceoName && (
                      <p className="text-sm text-destructive">{form.formState.errors.ceoName.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="advertiser-phone" className="text-sm font-medium">
                      전화번호 <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="advertiser-phone"
                      type="tel"
                      placeholder="02-1234-5678"
                      {...form.register("phone")}
                      className="w-full"
                      data-testid="input-advertiser-phone"
                    />
                    {form.formState.errors.phone && (
                      <p className="text-sm text-destructive">{form.formState.errors.phone.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      이메일 <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="contact@company.com"
                      {...form.register("email")}
                      className="w-full"
                      data-testid="input-email"
                    />
                    {form.formState.errors.email && (
                      <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full text-base"
                    disabled={mutation.isPending}
                    data-testid="button-submit-advertiser"
                  >
                    {mutation.isPending ? "신청 중..." : "광고 문의하기"}
                  </Button>
                </form>
              </>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}
