import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  const scrollToForm = () => {
    const formElement = document.getElementById('errand-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center bg-gradient-to-br from-primary/5 via-background to-chart-1/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
              <Sparkles className="w-4 h-4" />
              <span>믿을 수 있는 캠퍼스 서비스</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              바쁜 캠퍼스 생활,
              <br />
              <span className="text-primary">심부름 센터</span>가
              <br />
              도와드릴게요!
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
              강의와 과제, 동아리 활동까지 바쁜 대학생활. 
              이제 필요한 건 우리 학우들에게 맡기고 더 중요한 일에 집중하세요.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="text-base"
                onClick={scrollToForm}
                data-testid="button-hero-apply"
              >
                심부름 신청하기
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-base"
                onClick={() => {
                  const whySection = document.getElementById('why-section');
                  if (whySection) {
                    whySection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                data-testid="button-hero-learn"
              >
                자세히 알아보기
              </Button>
            </div>
          </div>
          
          <div className="relative hidden lg:flex justify-center items-center">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-chart-1/20 rounded-3xl transform rotate-6"></div>
              <div className="relative bg-card border border-card-border rounded-3xl p-8 space-y-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">빠른 매칭</p>
                    <p className="text-sm text-muted-foreground">5분 내 학우 연결</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-chart-1/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-chart-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">안전한 거래</p>
                    <p className="text-sm text-muted-foreground">학생 인증 완료</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-chart-2/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-chart-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">합리적 가격</p>
                    <p className="text-sm text-muted-foreground">투명한 비용</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
