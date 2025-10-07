import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { type ErrandRequest, type AdvertiserRequest } from "@shared/schema";
import { LogOut, Package, Megaphone } from "lucide-react";
import { format } from "date-fns";
import { ko } from "date-fns/locale";

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { data: errandRequests = [] } = useQuery<ErrandRequest[]>({
    queryKey: ['/api/errand-requests'],
    enabled: isLoggedIn,
  });

  const { data: advertiserRequests = [] } = useQuery<AdvertiserRequest[]>({
    queryKey: ['/api/advertiser-requests'],
    enabled: isLoggedIn,
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "admin" && password === "123456") {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("아이디 또는 비밀번호가 올바르지 않습니다.");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
        <Card className="w-full max-w-md p-8">
          <div className="mb-6 text-center space-y-2">
            <h1 className="text-2xl font-bold">관리자 로그인</h1>
            <p className="text-sm text-muted-foreground">
              캠퍼스 심부름 센터 관리 페이지
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">아이디</Label>
              <Input
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="admin"
                data-testid="input-username"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">비밀번호</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••"
                data-testid="input-password"
              />
            </div>

            {error && (
              <p className="text-sm text-destructive" data-testid="text-error">
                {error}
              </p>
            )}

            <Button type="submit" className="w-full" data-testid="button-login">
              로그인
            </Button>
          </form>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="bg-background border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">관리자 대시보드</h1>
              <p className="text-sm text-muted-foreground mt-1">
                캠퍼스 심부름 센터 관리
              </p>
            </div>
            <Button 
              variant="outline" 
              onClick={handleLogout}
              data-testid="button-logout"
            >
              <LogOut className="w-4 h-4 mr-2" />
              로그아웃
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="errands" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="errands" data-testid="tab-errands">
              <Package className="w-4 h-4 mr-2" />
              심부름 신청
              {errandRequests.length > 0 && (
                <Badge variant="secondary" className="ml-2">
                  {errandRequests.length}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="advertisers" data-testid="tab-advertisers">
              <Megaphone className="w-4 h-4 mr-2" />
              광고 신청
              {advertiserRequests.length > 0 && (
                <Badge variant="secondary" className="ml-2">
                  {advertiserRequests.length}
                </Badge>
              )}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="errands" className="space-y-4">
            {errandRequests.length === 0 ? (
              <Card className="p-12 text-center">
                <Package className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">아직 접수된 심부름 신청이 없습니다.</p>
              </Card>
            ) : (
              <div className="grid gap-4">
                {errandRequests.map((request) => (
                  <Card key={request.id} className="p-6" data-testid={`card-errand-${request.id}`}>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1 space-y-3">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="font-semibold text-lg">{request.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              {request.department} · {request.phone}
                            </p>
                          </div>
                          <Badge variant="secondary">
                            {format(new Date(request.createdAt), 'MM/dd HH:mm', { locale: ko })}
                          </Badge>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm">
                          <div>
                            <span className="text-muted-foreground">날짜:</span>{" "}
                            <span className="font-medium">{request.date}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">시간:</span>{" "}
                            <span className="font-medium">{request.time}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">장소:</span>{" "}
                            <span className="font-medium">{request.location}</span>
                          </div>
                        </div>
                        
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">심부름 내용:</p>
                          <p className="text-sm">{request.content}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="advertisers" className="space-y-4">
            {advertiserRequests.length === 0 ? (
              <Card className="p-12 text-center">
                <Megaphone className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">아직 접수된 광고 신청이 없습니다.</p>
              </Card>
            ) : (
              <div className="grid gap-4">
                {advertiserRequests.map((request) => (
                  <Card key={request.id} className="p-6" data-testid={`card-advertiser-${request.id}`}>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1 space-y-3">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="font-semibold text-lg">{request.companyName}</h3>
                            <p className="text-sm text-muted-foreground">
                              대표: {request.ceoName}
                            </p>
                          </div>
                          <Badge variant="secondary">
                            {format(new Date(request.createdAt), 'MM/dd HH:mm', { locale: ko })}
                          </Badge>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                          <div>
                            <span className="text-muted-foreground">전화번호:</span>{" "}
                            <span className="font-medium">{request.phone}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">이메일:</span>{" "}
                            <span className="font-medium">{request.email}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
