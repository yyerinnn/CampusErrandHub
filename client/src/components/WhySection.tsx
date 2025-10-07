import { Card } from "@/components/ui/card";
import { Clock, Shield, Users, TrendingUp, Heart, Zap } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "시간 절약",
    description: "강의 듣다가 급하게 필요한 거? 이제 걱정 마세요. 우리 학우들이 대신 해결해드려요.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Shield,
    title: "안전한 거래",
    description: "같은 학교 학우들끼리만! 학생증 인증 완료된 친구들과 안전하게 거래하세요.",
    color: "text-chart-1",
    bgColor: "bg-chart-1/10",
  },
  {
    icon: Users,
    title: "캠퍼스 커뮤니티",
    description: "혼자가 아니에요. 바쁜 캠퍼스 생활, 서로 도우며 함께 이겨내요!",
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
  },
  {
    icon: TrendingUp,
    title: "합리적인 가격",
    description: "학생 간 직거래로 중간 수수료 없이 합리적인 가격에 이용 가능해요.",
    color: "text-chart-2",
    bgColor: "bg-chart-2/10",
  },
  {
    icon: Heart,
    title: "용돈벌이 기회",
    description: "시간 여유 있을 때 친구들 도와주고 용돈도 벌 수 있어요. Win-Win!",
    color: "text-destructive",
    bgColor: "bg-destructive/10",
  },
  {
    icon: Zap,
    title: "빠른 매칭",
    description: "평균 5분 내 매칭! 급할 때 더 빛나는 심부름 센터의 스피드를 경험하세요.",
    color: "text-chart-4",
    bgColor: "bg-chart-4/10",
  },
];

export default function WhySection() {
  return (
    <section id="why-section" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            왜 심부름 센터를 이용해야 할까요?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            바쁜 대학생활, 이제 혼자 고민하지 마세요. 
            우리 학우들과 함께라면 더 쉽고 편하게!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <Card 
              key={index} 
              className="p-6 md:p-8 hover-elevate transition-all duration-200"
              data-testid={`card-reason-${index}`}
            >
              <div className={`w-12 h-12 ${reason.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                <reason.icon className={`w-6 h-6 ${reason.color}`} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
