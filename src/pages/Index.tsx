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
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold gradient-text">🤖 ИИ для коммуникаций</div>
          <div className="hidden md:flex gap-6">
            <a href="#audience" className="hover:text-primary transition-colors">Для кого</a>
            <a href="#program" className="hover:text-primary transition-colors">Программа</a>
            <a href="#results" className="hover:text-primary transition-colors">Результаты</a>
            <a href="#register" className="hover:text-primary transition-colors">Регистрация</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
          </div>
          <Button size="sm" className="animate-glow">Записаться</Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 blur-3xl opacity-30"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text leading-tight">
              ИИ для коммуникаций
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-muted-foreground">
              пресс-службы, медиа, блоги, бизнес и политика
            </p>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              Искусственный интеллект перестал быть экспериментом. 
              Сегодня это рабочий инструмент для тех, кто отвечает за смыслы, повестку, репутацию и скорость реакции.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-up">
              <Button size="lg" className="text-lg px-8 animate-glow">
                <Icon name="Calendar" className="mr-2" size={20} />
                Записаться на обучение
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Icon name="FileText" className="mr-2" size={20} />
                Программа курса
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <Card className="p-6 text-center border-primary/30 hover:border-primary transition-all hover:scale-105">
                <div className="text-3xl font-bold text-primary mb-2">2</div>
                <div className="text-sm text-muted-foreground">дня обучения</div>
              </Card>
              <Card className="p-6 text-center border-secondary/30 hover:border-secondary transition-all hover:scale-105">
                <div className="text-3xl font-bold text-secondary mb-2">50/50</div>
                <div className="text-sm text-muted-foreground">теория/практика</div>
              </Card>
              <Card className="p-6 text-center border-accent/30 hover:border-accent transition-all hover:scale-105">
                <div className="text-3xl font-bold text-accent mb-2">8-9</div>
                <div className="text-sm text-muted-foreground">часов в день</div>
              </Card>
              <Card className="p-6 text-center border-primary/30 hover:border-primary transition-all hover:scale-105">
                <div className="text-3xl font-bold text-primary mb-2">Очно</div>
                <div className="text-sm text-muted-foreground">формат</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="audience" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Для кого это обучение
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "Newspaper", title: "Пресс-службы и PR-подразделения", desc: "Автоматизация работы с текстами и аналитикой" },
              { icon: "Tv", title: "Сотрудники СМИ и редакций", desc: "Ускорение создания контента и поиска инфоповодов" },
              { icon: "MessageSquare", title: "Администраторы каналов", desc: "Telegram и ВКонтакте — контент-планирование с ИИ" },
              { icon: "User", title: "Блогеры и авторы", desc: "Личные бренды — системный подход к контенту" },
              { icon: "Briefcase", title: "Предприниматели", desc: "Инструменты для управления репутацией бизнеса" },
              { icon: "Users", title: "Политики и команды", desc: "Коммуникационные стратегии с использованием ИИ" }
            ].map((item, idx) => (
              <Card key={idx} className="p-6 hover:border-primary transition-all hover:scale-105 group">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <Icon name={item.icon} className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="program" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Программа обучения
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Двухдневная интенсивная программа с практическими заданиями
          </p>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="day1" className="border border-border rounded-lg px-6 bg-card/50">
              <AccordionTrigger className="text-2xl font-bold hover:text-primary">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <span>День 1 — тексты, контент и системность</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-6 space-y-4">
                <div className="flex gap-3 items-start">
                  <Icon name="Check" className="text-primary mt-1 shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1">ИИ без мифов</h4>
                    <p className="text-muted-foreground">Где он реально помогает в коммуникациях</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Icon name="Check" className="text-primary mt-1 shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1">Контент-генерация</h4>
                    <p className="text-muted-foreground">Посты, пресс-релизы, заявления, заголовки</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Icon name="Check" className="text-primary mt-1 shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1">Промпт-инжиниринг</h4>
                    <p className="text-muted-foreground">Для PR, СМИ и соцсетей — практические шаблоны</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Icon name="Check" className="text-primary mt-1 shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1">Мультиканальность</h4>
                    <p className="text-muted-foreground">Один инфоповод → Telegram, ВК, СМИ, сайт</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Icon name="Check" className="text-primary mt-1 shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1">Контент-планирование</h4>
                    <p className="text-muted-foreground">Работа «впрок» с ИИ-ассистентами</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="day2" className="border border-border rounded-lg px-6 bg-card/50">
              <AccordionTrigger className="text-2xl font-bold hover:text-secondary">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <span className="text-secondary font-bold">2</span>
                  </div>
                  <span>День 2 — визуал, аналитика и автоматизация</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-6 space-y-4">
                <div className="flex gap-3 items-start">
                  <Icon name="Check" className="text-secondary mt-1 shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1">Визуальный контент</h4>
                    <p className="text-muted-foreground">Создание изображений и презентаций с ИИ</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Icon name="Check" className="text-secondary mt-1 shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1">Мониторинг медиа</h4>
                    <p className="text-muted-foreground">Отслеживание СМИ и соцсетей, поиск трендов</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Icon name="Check" className="text-secondary mt-1 shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1">Аналитические справки</h4>
                    <p className="text-muted-foreground">Репутационные риски и автоматический анализ</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Icon name="Check" className="text-secondary mt-1 shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1">ИИ-ассистенты и боты</h4>
                    <p className="text-muted-foreground">Telegram-боты для автоматизации рутины</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Icon name="Check" className="text-secondary mt-1 shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1">План внедрения</h4>
                    <p className="text-muted-foreground">Пошаговая стратегия внедрения ИИ за 30 дней</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="results" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Что унесут участники
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Практические инструменты для немедленного применения
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: "BookOpen", title: "Библиотека промптов", desc: "Готовые шаблоны под вашу деятельность — от пресс-релизов до постов" },
              { icon: "FileText", title: "Набор готовых текстов", desc: "Примеры контента и визуалов, созданных на обучении" },
              { icon: "CalendarDays", title: "Контент-план", desc: "Готовый план публикаций на 2-4 недели вперёд" },
              { icon: "BarChart3", title: "Шаблоны аналитики", desc: "Инструменты для мониторинга и автоматизации процессов" },
              { icon: "Lightbulb", title: "Чёткое понимание", desc: "Как использовать ИИ каждый день в своей работе" },
              { icon: "Rocket", title: "Конкурентное преимущество", desc: "ИИ — новый стандарт работы для коммуникаций" }
            ].map((item, idx) => (
              <Card key={idx} className="p-6 hover:border-accent transition-all hover:scale-105 group">
                <div className="flex gap-4 items-start">
                  <div className="w-14 h-14 bg-accent/20 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-accent/30 transition-colors">
                    <Icon name={item.icon} className="text-accent" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-12 p-8 border-2 border-primary rounded-2xl bg-primary/5 text-center">
            <Icon name="Target" className="mx-auto mb-4 text-primary" size={48} />
            <h3 className="text-2xl font-bold mb-3">Ключевая идея программы</h3>
            <p className="text-lg max-w-2xl mx-auto">
              ИИ — это новый стандарт работы для коммуникаций. 
              Не теория. Не хайп. А практический инструмент для результата.
            </p>
          </div>
        </div>
      </section>

      <section id="register" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Регистрация на обучение
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Заполните форму, и мы свяжемся с вами для уточнения деталей и подтверждения участия.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
                    <Icon name="MapPin" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Адрес проведения</h4>
                    <p className="text-muted-foreground">Будет объявлен дополнительно после регистрации</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center shrink-0">
                    <Icon name="Calendar" className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Даты проведения</h4>
                    <p className="text-muted-foreground">Уточняются индивидуально</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center shrink-0">
                    <Icon name="Clock" className="text-accent" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Время</h4>
                    <p className="text-muted-foreground">8-9 часов каждый день (с перерывами)</p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input 
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input 
                    type="email"
                    placeholder="ivan@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input 
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Комментарий</label>
                  <Textarea 
                    placeholder="Расскажите о своей сфере деятельности..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full text-lg py-6 animate-glow">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Частые вопросы
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Ответы на популярные вопросы об обучении
          </p>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="q1" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Нужны ли специальные знания для участия?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Нет, специальных технических знаний не требуется. Программа разработана для специалистов в коммуникациях, 
                которые хотят освоить практическое применение ИИ в своей работе. Весь материал подаётся доступным языком.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q2" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Что нужно взять с собой?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Потребуется ноутбук для практических заданий. Все необходимые инструменты и доступы будут предоставлены 
                на обучении. Также рекомендуем взять блокнот для заметок.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q3" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Выдаётся ли сертификат?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, по окончании обучения все участники получают сертификат о прохождении программы. 
                Также вы унесёте с собой все практические материалы и инструменты.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q4" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Есть ли возможность дистанционного участия?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Данная программа проводится только в очном формате для максимальной эффективности практических занятий 
                и живого взаимодействия. Онлайн-формат может быть рассмотрен в будущем.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q5" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Какие ИИ-инструменты будут использоваться?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Мы работаем с актуальными ИИ-платформами для генерации текста, изображений и аналитики. 
                Конкретный список инструментов предоставляется участникам перед началом обучения.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <div className="text-2xl font-bold gradient-text mb-4">🤖 ИИ для коммуникаций</div>
          <p className="text-muted-foreground mb-6">
            Практический инструмент для результата
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="#audience" className="text-sm hover:text-primary transition-colors">Для кого</a>
            <a href="#program" className="text-sm hover:text-primary transition-colors">Программа</a>
            <a href="#results" className="text-sm hover:text-primary transition-colors">Результаты</a>
            <a href="#register" className="text-sm hover:text-primary transition-colors">Регистрация</a>
            <a href="#faq" className="text-sm hover:text-primary transition-colors">FAQ</a>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2026 Образовательная программа по ИИ
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
