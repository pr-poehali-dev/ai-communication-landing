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
            <a href="#result" className="hover:text-primary transition-colors">Результат</a>
          </div>
          <Button className="gradient-primary hover:opacity-90 text-white font-semibold rounded-full px-6">
            Оставить заявку
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
                  PR, медиа, блоги, бизнес и политика
                </p>
                <p className="text-lg mb-10 text-foreground/60 leading-relaxed max-w-xl">
                  Практическая двухдневная программа о том, как использовать искусственный интеллект для управления смыслами, репутацией и скоростью реакции — в реальной работе, а не в теории.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Button size="lg" className="gradient-primary hover:opacity-90 text-white font-semibold rounded-full text-base px-8 h-14 glow-effect">
                    <Icon name="Calendar" size={20} className="mr-2" />
                    Оставить заявку
                  </Button>
                  <Button size="lg" variant="outline" className="font-semibold rounded-full text-base px-8 h-14 border-2">
                    <Icon name="FileText" size={20} className="mr-2" />
                    Программа и условия
                  </Button>
                </div>
                <p className="text-base text-foreground/50 font-medium">
                  За 2 дня вы соберёте рабочий ИИ-набор под свои задачи и план внедрения на 30 дней
                </p>
              </div>
              
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-8 bg-gradient-to-br from-primary/10 to-purple-500/10 border-primary/20 hover:scale-105 transition-transform">
                    <div className="text-5xl font-black gradient-text mb-2">2</div>
                    <div className="text-sm font-medium text-foreground/60">дня</div>
                  </Card>
                  <Card className="p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20 hover:scale-105 transition-transform">
                    <div className="text-5xl font-black text-purple-600 mb-2">8-9</div>
                    <div className="text-sm font-medium text-foreground/60">часов</div>
                  </Card>
                  <Card className="p-8 bg-gradient-to-br from-pink-500/10 to-primary/10 border-pink-500/20 hover:scale-105 transition-transform">
                    <div className="text-5xl font-black text-pink-600 mb-2">50/50</div>
                    <div className="text-sm font-medium text-foreground/60">практика</div>
                  </Card>
                  <Card className="p-8 bg-gradient-to-br from-primary/10 to-purple-500/10 border-primary/20 hover:scale-105 transition-transform">
                    <Icon name="Users" size={40} className="text-primary mb-2" />
                    <div className="text-sm font-medium text-foreground/60">Очно</div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              ИИ перестал быть экспериментом. <br />
              <span className="gradient-text">Он стал стандартом</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                Коммуникации ускорились. Повестка меняется ежедневно. 
                Требуется больше контента, быстрее реакции и меньше ошибок.
              </p>
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <Icon name="Check" size={20} className="text-primary shrink-0 mt-1" />
                  <span className="text-foreground/70">ИИ уже используют редакции и пресс-службы</span>
                </div>
                <div className="flex gap-3 items-start">
                  <Icon name="Check" size={20} className="text-primary shrink-0 mt-1" />
                  <span className="text-foreground/70">Авторы Telegram-каналов работают с ИИ ежедневно</span>
                </div>
                <div className="flex gap-3 items-start">
                  <Icon name="Check" size={20} className="text-primary shrink-0 mt-1" />
                  <span className="text-foreground/70">Бизнес и публичные фигуры автоматизируют коммуникации</span>
                </div>
              </div>
            </div>
            <div>
              <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                Но большинство:
              </p>
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <Icon name="X" size={20} className="text-destructive shrink-0 mt-1" />
                  <span className="text-foreground/70">Используют ИИ фрагментарно</span>
                </div>
                <div className="flex gap-3 items-start">
                  <Icon name="X" size={20} className="text-destructive shrink-0 mt-1" />
                  <span className="text-foreground/70">Получают «сырые» тексты</span>
                </div>
                <div className="flex gap-3 items-start">
                  <Icon name="X" size={20} className="text-destructive shrink-0 mt-1" />
                  <span className="text-foreground/70">Не понимают, как встроить ИИ в ежедневную работу</span>
                </div>
              </div>
            </div>
          </div>

          <Card className="p-10 bg-gradient-to-br from-primary/5 to-purple-500/5 border-primary/20 text-center">
            <p className="text-xl font-semibold text-foreground/80">
              Эта программа — про <span className="text-primary">системное, безопасное и прикладное</span> использование ИИ в коммуникациях
            </p>
          </Card>
        </div>
      </section>

      <section id="audience" className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Кому подойдёт <span className="gradient-text">обучение</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Программа создана для тех, кто отвечает за публичные тексты, повестку и репутацию
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              { icon: "Newspaper", title: "Пресс-службы и PR-подразделения", color: "from-primary/20 to-purple-500/20" },
              { icon: "Tv", title: "Сотрудники СМИ и редакций", color: "from-purple-500/20 to-pink-500/20" },
              { icon: "MessageSquare", title: "Администраторы Telegram и ВК", color: "from-pink-500/20 to-primary/20" },
              { icon: "User", title: "Блогеры и авторы личных брендов", color: "from-primary/20 to-purple-500/20" },
              { icon: "Briefcase", title: "Предприниматели и управленцы", color: "from-purple-500/20 to-pink-500/20" },
              { icon: "Users", title: "Политики и их команды", color: "from-pink-500/20 to-primary/20" }
            ].map((item, idx) => (
              <Card key={idx} className={`p-8 bg-gradient-to-br ${item.color} border-0 hover:scale-105 transition-all group`}>
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Icon name={item.icon} size={28} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold">{item.title}</h3>
              </Card>
            ))}
          </div>

          <p className="text-center text-foreground/60 text-lg">
            <Icon name="Info" size={20} className="inline mr-2 text-primary" />
            Уровень подготовки не важен — обучение выстроено от базы к системному применению
          </p>
        </div>
      </section>

      <section id="program" className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Программа <span className="gradient-text">обучения</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Минимум «воды», максимум практики. Работа с вашими задачами и материалами
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-6">
            <AccordionItem value="day1" className="bg-muted/30 rounded-3xl border-2 border-border overflow-hidden">
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
                  <p className="text-foreground/70 font-medium mb-6">Фокус: слова, смыслы, масштабирование контента</p>
                  {[
                    { title: "ИИ без мифов", desc: "Где он реально помогает, а где нет" },
                    { title: "Создание постов, пресс-релизов, заявлений, заголовков", desc: "Практика на реальных материалах" },
                    { title: "Промпт-инжиниринг для PR, СМИ и соцсетей", desc: "Шаблоны и техники эффективных запросов" },
                    { title: "Один инфоповод → Telegram, ВК, СМИ, сайт", desc: "Мультиканальное распространение контента" },
                    { title: "Контент-планирование и работа «впрок»", desc: "Создание контента на недели вперёд" },
                    { title: "Практика на кейсах участников", desc: "Разбор ваших реальных задач" }
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

            <AccordionItem value="day2" className="bg-muted/30 rounded-3xl border-2 border-border overflow-hidden">
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
                  <p className="text-foreground/70 font-medium mb-6">Фокус: скорость, контроль и снижение рисков</p>
                  {[
                    { title: "Визуальный контент и презентации с ИИ", desc: "Создание изображений и оформление материалов" },
                    { title: "Мониторинг СМИ и соцсетей, поиск трендов", desc: "Автоматизация медиа-аналитики" },
                    { title: "Аналитические справки и репутационные риски", desc: "Быстрый анализ инфополя" },
                    { title: "ИИ-ассистенты, Telegram-боты, автоматизация рутин", desc: "Создание персональных помощников" },
                    { title: "Как выстроить экосистему ИИ под себя", desc: "Интеграция всех инструментов в единую систему" },
                    { title: "Пошаговый план внедрения ИИ за 30 дней", desc: "Готовый чеклист для вашей работы" }
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

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-12 gradient-primary text-white rounded-3xl shadow-2xl glow-effect text-center">
            <Icon name="Target" size={56} className="mx-auto mb-6 opacity-90" />
            <h3 className="text-4xl font-black mb-6">Ключевая идея программы</h3>
            <p className="text-2xl leading-relaxed opacity-95 font-medium">
              ИИ — это новый стандарт работы для коммуникаций. <br />
              Не теория. Не хайп. <br />
              А практический инструмент для результата, скорости и контроля.
            </p>
          </Card>
        </div>
      </section>

      <section id="result" className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              С чем вы <span className="gradient-text">уйдёте</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Это не лекции. Это рабочий результат
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              { 
                icon: "BookOpen", 
                title: "Персональная библиотека промптов", 
                desc: "Готовые шаблоны под вашу деятельность — от пресс-релизов до постов", 
                gradient: "from-primary/20 to-purple-500/20" 
              },
              { 
                icon: "FileText", 
                title: "Набор готовых текстов и визуалов", 
                desc: "Материалы, созданные на обучении и готовые к использованию", 
                gradient: "from-purple-500/20 to-pink-500/20" 
              },
              { 
                icon: "CalendarDays", 
                title: "Контент-план на 2-4 недели", 
                desc: "Готовый план публикаций для всех ваших каналов", 
                gradient: "from-pink-500/20 to-primary/20" 
              },
              { 
                icon: "BarChart3", 
                title: "Шаблоны аналитики и мониторинга", 
                desc: "Инструменты для отслеживания эффективности и медиа-поля", 
                gradient: "from-primary/20 to-purple-500/20" 
              },
              { 
                icon: "Rocket", 
                title: "Пошаговый план внедрения ИИ за 30 дней", 
                desc: "Чёткий чеклист действий для интеграции ИИ в работу", 
                gradient: "from-purple-500/20 to-pink-500/20" 
              },
              { 
                icon: "Lightbulb", 
                title: "Чёткое понимание применения ИИ", 
                desc: "Уверенность в качестве, безопасности и эффективности", 
                gradient: "from-pink-500/20 to-primary/20" 
              }
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

          <div className="grid md:grid-cols-5 gap-6 text-center">
            {[
              { label: "Снижение времени на рутину", value: "70%" },
              { label: "Рост скорости реакции", value: "5x" },
              { label: "Качество контента", value: "Выше" },
              { label: "Каналов охватываете", value: "Больше" },
              { label: "Конкурентное преимущество", value: "Явное" }
            ].map((item, idx) => (
              <Card key={idx} className="p-6 bg-gradient-to-br from-primary/5 to-purple-500/5 border-primary/20">
                <div className="text-3xl font-black gradient-text mb-2">{item.value}</div>
                <div className="text-sm font-medium text-foreground/60">{item.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="register" className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Готовы встроить ИИ <br />
              <span className="gradient-text">системно и по-взрослому?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Оставьте заявку, и мы пришлём подробную программу, даты и условия участия
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3 space-y-6">
              {[
                { icon: "MapPin", title: "Формат", desc: "Очный, живая работа с практикой" },
                { icon: "Calendar", title: "Даты", desc: "Уточняются индивидуально после заявки" },
                { icon: "Clock", title: "Время", desc: "8-9 часов каждый день (с перерывами)" },
                { icon: "Users", title: "Для кого", desc: "Индивидуально или для корпоративных команд" }
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
              <a href="#result" className="hover:text-primary transition-colors">Результат</a>
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
