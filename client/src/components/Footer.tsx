import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="font-semibold text-lg">캠퍼스 심부름 센터</p>
            <p className="text-sm text-muted-foreground mt-1">
              바쁜 대학생활의 든든한 파트너
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-destructive fill-destructive" />
            <span>for 대학생</span>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2024 캠퍼스 심부름 센터. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
