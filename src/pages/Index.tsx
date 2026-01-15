import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
              <Icon name="Sparkles" size={18} className="text-white" />
            </div>
            <span className="text-lg font-bold">ИИ для коммуникаций</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#audience" className="hover:text-primary transition-colors">Для кого</a>
            <a href="#program" className="hover:text-primary transition-colors">Программа</a>
            <a href="#examples" className="hover:text-primary transition-colors">Примеры</a>
            <a href="#results" className="hover:text-primary transition-colors">Результаты</a>
          </div>
          <Button className="gradient-primary hover:opacity-90 text-white font-semibold rounded-full px-6">
            Записаться
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-semibold mb-8 border border-primary/20">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  Очная программа • 2 дня
                </div>
                <h1 className="text-6xl md:text-7xl font-black mb-6 leading-[1.1]">
                  <span className="gradient-text">ИИ для коммуникаций</span>
                </h1>
                <p className="text-2xl mb-4 text-foreground/70 font-medium">
                  пресс-службы, медиа, блоги, бизнес и политика
                </p>
                <p className="text-lg mb-10 text-foreground/60 leading-relaxed max-w-xl">
                  Искусственный интеллект перестал быть экспериментом. 
                  Сегодня это рабочий инструмент для тех, кто отвечает за смыслы, повестку, репутацию и скорость реакции.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="gradient-primary hover:opacity-90 text-white font-semibold rounded-full text-base px-8 h-14 glow-effect">
                    <Icon name="Calendar" size={20} className="mr-2" />
                    Записаться на обучение
                  </Button>
                  <Button size="lg" variant="outline" className="font-semibold rounded-full text-base px-8 h-14 border-2">
                    <Icon name="FileText" size={20} className="mr-2" />
                    Программа курса
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-8 bg-gradient-to-br from-primary/10 to-purple-500/10 border-primary/20 hover:scale-105 transition-transform">
                    <div className="text-5xl font-black gradient-text mb-2">2</div>
                    <div className="text-sm font-medium text-foreground/60">дня обучения</div>
                  </Card>
                  <Card className="p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20 hover:scale-105 transition-transform">
                    <div className="text-5xl font-black text-purple-600 mb-2">50/50</div>
                    <div className="text-sm font-medium text-foreground/60">теория/практика</div>
                  </Card>
                  <Card className="p-8 bg-gradient-to-br from-pink-500/10 to-primary/10 border-pink-500/20 hover:scale-105 transition-transform">
                    <div className="text-5xl font-black text-pink-600 mb-2">8-9</div>
                    <div className="text-sm font-medium text-foreground/60">часов в день</div>
                  </Card>
                  <Card className="p-8 bg-gradient-to-br from-primary/10 to-purple-500/10 border-primary/20 hover:scale-105 transition-transform">
                    <Icon name="Users" size={40} className="text-primary mb-2" />
                    <div className="text-sm font-medium text-foreground/60">Очный формат</div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="audience" className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Для кого это <span className="gradient-text">обучение</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Программа подходит специалистам, которые работают с коммуникациями и хотят освоить ИИ
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "Newspaper", title: "Пресс-службы и PR", desc: "Автоматизация работы с текстами, аналитикой и медиа-мониторингом", color: "from-primary/20 to-purple-500/20" },
              { icon: "Tv", title: "СМИ и редакции", desc: "Ускорение создания контента, поиск инфоповодов и трендов", color: "from-purple-500/20 to-pink-500/20" },
              { icon: "MessageSquare", title: "Telegram и ВК", desc: "Системное управление каналами и сообществами с помощью ИИ", color: "from-pink-500/20 to-primary/20" },
              { icon: "User", title: "Блогеры", desc: "Инструменты для развития личного бренда и регулярного контента", color: "from-primary/20 to-purple-500/20" },
              { icon: "Briefcase", title: "Бизнес", desc: "Управление репутацией компании и коммуникацией с клиентами", color: "from-purple-500/20 to-pink-500/20" },
              { icon: "Users", title: "Политика", desc: "Стратегическая коммуникация и работа с общественным мнением", color: "from-pink-500/20 to-primary/20" }
            ].map((item, idx) => (
              <Card key={idx} className={`p-8 bg-gradient-to-br ${item.color} border-0 hover:scale-105 transition-all group`}>
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Icon name={item.icon} size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-foreground/60 leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="examples" className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="gradient-text">Примеры</span> работы с ИИ
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Реальные кейсы применения нейросетей в коммуникациях
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="overflow-hidden border-2 border-border hover:border-primary/50 transition-all group">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-purple-500/10 relative overflow-hidden">
                <video 
                  className="w-full h-full object-cover"
                  poster="https://cdn.poehali.dev/projects/663ee447-add9-4d61-a565-0705558e3203/files/9ea4c986-e7cd-41e8-b386-2d100c321145.jpg"
                  controls
                >
                  <source src="#" type="video/mp4" />
                </video>
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                    <Icon name="Play" size={28} className="text-primary ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Генерация пресс-релиза за 2 минуты</h3>
                <p className="text-foreground/60">Как ИИ помогает создавать качественные тексты для СМИ в 10 раз быстрее</p>
              </div>
            </Card>

            <Card className="overflow-hidden border-2 border-border hover:border-primary/50 transition-all group">
              <div className="aspect-video bg-gradient-to-br from-purple-500/10 to-pink-500/10 relative overflow-hidden">
                <video 
                  className="w-full h-full object-cover"
                  poster="https://cdn.poehali.dev/projects/663ee447-add9-4d61-a565-0705558e3203/files/013a9479-f552-4b62-95a6-b88e2ff54c29.jpg"
                  controls
                >
                  <source src="#" type="video/mp4" />
                </video>
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                    <Icon name="Play" size={28} className="text-primary ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Контент-план на месяц за 10 минут</h3>
                <p className="text-foreground/60">Автоматизация планирования публикаций для всех каналов</p>
              </div>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "Image", title: "Визуальный контент", desc: "Создание изображений для постов" },
              { icon: "BarChart3", title: "Медиа-аналитика", desc: "Мониторинг упоминаний в реальном времени" },
              { icon: "MessageCircle", title: "Ответы на комментарии", desc: "Автоматизация коммуникации" }
            ].map((item, idx) => (
              <Card key={idx} className="p-6 border-2 border-border hover:border-primary/50 transition-all hover:scale-105">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mb-4">
                  <Icon name={item.icon} size={24} className="text-white" />
                </div>
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-foreground/60">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="program" className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Программа <span className="gradient-text">обучения</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Двухдневная интенсивная программа с балансом теории и практики
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-6">
            <AccordionItem value="day1" className="bg-white rounded-3xl border-2 border-border overflow-hidden">
              <AccordionTrigger className="px-10 py-8 text-left hover:no-underline">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                    <span className="font-black text-2xl text-white">1</span>
                  </div>
                  <div>
                    <div className="text-3xl font-black mb-2">День 1</div>
                    <div className="text-lg font-medium text-foreground/60">Тексты, контент и системность</div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-10 pb-10 pt-0">
                <div className="space-y-5 pl-20">
                  {[
                    { title: "ИИ без мифов", desc: "Где он реально помогает в коммуникациях" },
                    { title: "Контент-генерация", desc: "Посты, пресс-релизы, заявления, заголовки" },
                    { title: "Промпт-инжиниринг", desc: "Для PR, СМИ и соцсетей — практические шаблоны" },
                    { title: "Мультиканальность", desc: "Один инфоповод → Telegram, ВК, СМИ, сайт" },
                    { title: "Контент-планирование", desc: "Работа «впрок» с ИИ-ассистентами" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                        <Icon name="Check" size={14} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                        <p className="text-foreground/60">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="day2" className="bg-white rounded-3xl border-2 border-border overflow-hidden">
              <AccordionTrigger className="px-10 py-8 text-left hover:no-underline">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                    <span className="font-black text-2xl text-white">2</span>
                  </div>
                  <div>
                    <div className="text-3xl font-black mb-2">День 2</div>
                    <div className="text-lg font-medium text-foreground/60">Визуал, аналитика и автоматизация</div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-10 pb-10 pt-0">
                <div className="space-y-5 pl-20">
                  {[
                    { title: "Визуальный контент", desc: "Создание изображений и презентаций с ИИ" },
                    { title: "Мониторинг медиа", desc: "Отслеживание СМИ и соцсетей, поиск трендов" },
                    { title: "Аналитические справки", desc: "Репутационные риски и автоматический анализ" },
                    { title: "ИИ-ассистенты и боты", desc: "Telegram-боты для автоматизации рутины" },
                    { title: "План внедрения", desc: "Пошаговая стратегия внедрения ИИ за 30 дней" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <div className="w-6 h-6 rounded-full bg-purple-600/20 flex items-center justify-center shrink-0 mt-1">
                        <Icon name="Check" size={14} className="text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                        <p className="text-foreground/60">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="results" className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Что унесут <span className="gradient-text">участники</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Практические инструменты для немедленного применения в работе
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { icon: "BookOpen", title: "Библиотека промптов", desc: "Готовые шаблоны под вашу деятельность — от пресс-релизов до постов", gradient: "from-primary/20 to-purple-500/20" },
              { icon: "FileText", title: "Готовые материалы", desc: "Примеры текстов и визуалов, созданных на обучении", gradient: "from-purple-500/20 to-pink-500/20" },
              { icon: "CalendarDays", title: "Контент-план", desc: "Готовый план публикаций на 2-4 недели для всех каналов", gradient: "from-pink-500/20 to-primary/20" },
              { icon: "BarChart3", title: "Инструменты аналитики", desc: "Шаблоны для мониторинга медиа и автоматизации", gradient: "from-primary/20 to-purple-500/20" },
              { icon: "Lightbulb", title: "Практические навыки", desc: "Понимание, как использовать ИИ ежедневно", gradient: "from-purple-500/20 to-pink-500/20" },
              { icon: "Rocket", title: "Конкурентное преимущество", desc: "ИИ — новый стандарт работы для коммуникаций", gradient: "from-pink-500/20 to-primary/20" }
            ].map((item, idx) => (
              <Card key={idx} className={`p-8 bg-gradient-to-br ${item.gradient} border-0 hover:scale-105 transition-all`}>
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Icon name={item.icon} size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-foreground/60 leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
          
          <Card className="p-12 gradient-primary text-white rounded-3xl shadow-2xl glow-effect">
            <div className="max-w-3xl mx-auto text-center">
              <Icon name="Sparkles" size={48} className="mx-auto mb-6 opacity-90" />
              <h3 className="text-4xl font-black mb-6">Ключевая идея программы</h3>
              <p className="text-xl leading-relaxed opacity-95">
                ИИ — это новый стандарт работы для коммуникаций. 
                Не теория. Не хайп. А практический инструмент для результата.
              </p>
            </div>
          </Card>
        </div>
      </section>

      <section id="register" className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3">
              <h2 className="text-5xl md:text-6xl font-black mb-6">
                Регистрация на <span className="gradient-text">обучение</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                Заполните форму, и мы свяжемся с вами для уточнения деталей и подтверждения участия.
              </p>
              <div className="space-y-6">
                {[
                  { icon: "MapPin", title: "Адрес проведения", desc: "Будет объявлен после регистрации" },
                  { icon: "Calendar", title: "Даты проведения", desc: "Уточняются индивидуально" },
                  { icon: "Clock", title: "Время занятий", desc: "8-9 часов каждый день (с перерывами)" }
                ].map((item, idx) => (
                  <Card key={idx} className="p-6 flex gap-5 items-start border-2 border-border hover:border-primary/50 transition-all">
                    <div className="w-14 h-14 gradient-primary rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                      <Icon name={item.icon} size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-foreground/60">{item.desc}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
            
            <Card className="lg:col-span-2 p-8 border-2 border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold mb-3">Ваше имя *</label>
                  <Input 
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="h-12 rounded-xl border-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-3">Email *</label>
                  <Input 
                    type="email"
                    placeholder="ivan@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="h-12 rounded-xl border-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-3">Телефон *</label>
                  <Input 
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                    className="h-12 rounded-xl border-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-3">Комментарий</label>
                  <Textarea 
                    placeholder="Расскажите о своей сфере деятельности..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="rounded-xl border-2"
                  />
                </div>
                <Button type="submit" className="w-full h-14 text-base font-bold gradient-primary hover:opacity-90 text-white rounded-full glow-effect">
                  Отправить заявку
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-16 px-4 bg-foreground text-background">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <Icon name="Sparkles" size={20} className="text-white" />
              </div>
              <div>
                <div className="font-bold text-lg">ИИ для коммуникаций</div>
                <div className="text-sm text-background/60">Практический инструмент для результата</div>
              </div>
            </div>
            <div className="flex gap-8 text-sm font-medium">
              <a href="#audience" className="hover:text-primary transition-colors">Для кого</a>
              <a href="#program" className="hover:text-primary transition-colors">Программа</a>
              <a href="#examples" className="hover:text-primary transition-colors">Примеры</a>
              <a href="#results" className="hover:text-primary transition-colors">Результаты</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-background/10 text-center text-sm text-background/40">
            © 2026 Образовательная программа по ИИ
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
