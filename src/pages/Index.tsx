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
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-xl font-black">ИИ для коммуникаций</div>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#audience" className="hover:text-primary transition-colors font-medium">Для кого</a>
            <a href="#program" className="hover:text-primary transition-colors font-medium">Программа</a>
            <a href="#results" className="hover:text-primary transition-colors font-medium">Результаты</a>
            <a href="#faq" className="hover:text-primary transition-colors font-medium">FAQ</a>
          </div>
          <Button className="bg-secondary hover:bg-secondary/90 text-white font-medium">Записаться</Button>
        </div>
      </nav>

      <section className="pt-28 pb-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-4 py-1.5 bg-primary/20 rounded-full text-sm font-medium mb-6">
              Очная программа • 2 дня
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              ИИ для коммуникаций
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-muted-foreground font-medium">
              пресс-службы, медиа, блоги, бизнес и политика
            </p>
            <p className="text-lg mb-8 max-w-2xl leading-relaxed">
              Искусственный интеллект перестал быть экспериментом. 
              Сегодня это рабочий инструмент для тех, кто отвечает за смыслы, повестку, репутацию и скорость реакции.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white text-base font-medium px-8">
                Записаться на обучение
              </Button>
              <Button size="lg" variant="outline" className="text-base font-medium px-8">
                Программа курса
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-5 rounded-lg border border-border">
                <div className="text-3xl font-black mb-1">2</div>
                <div className="text-sm text-muted-foreground">дня обучения</div>
              </div>
              <div className="bg-white p-5 rounded-lg border border-border">
                <div className="text-3xl font-black mb-1">50/50</div>
                <div className="text-sm text-muted-foreground">теория/практика</div>
              </div>
              <div className="bg-white p-5 rounded-lg border border-border">
                <div className="text-3xl font-black mb-1">8-9ч</div>
                <div className="text-sm text-muted-foreground">в день</div>
              </div>
              <div className="bg-white p-5 rounded-lg border border-border">
                <div className="text-3xl font-black mb-1">Очно</div>
                <div className="text-sm text-muted-foreground">формат</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <img 
              src="https://cdn.poehali.dev/projects/663ee447-add9-4d61-a565-0705558e3203/files/9ea4c986-e7cd-41e8-b386-2d100c321145.jpg" 
              alt="Работа с ИИ" 
              className="w-full h-[400px] object-cover rounded-2xl mb-12"
            />
          </div>
        </div>
      </section>

      <section id="audience" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Для кого это обучение
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
              Программа подходит специалистам, которые работают с коммуникациями и хотят освоить практическое применение ИИ
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { 
                  icon: "Newspaper", 
                  title: "Пресс-службы и PR", 
                  desc: "Автоматизация работы с текстами, аналитикой и медиа-мониторингом" 
                },
                { 
                  icon: "Tv", 
                  title: "СМИ и редакции", 
                  desc: "Ускорение создания контента, поиск инфоповодов и трендов" 
                },
                { 
                  icon: "MessageSquare", 
                  title: "Telegram и ВК", 
                  desc: "Системное управление каналами и сообществами с помощью ИИ" 
                },
                { 
                  icon: "User", 
                  title: "Блогеры", 
                  desc: "Инструменты для развития личного бренда и регулярного контента" 
                },
                { 
                  icon: "Briefcase", 
                  title: "Бизнес", 
                  desc: "Управление репутацией компании и коммуникацией с клиентами" 
                },
                { 
                  icon: "Users", 
                  title: "Политика", 
                  desc: "Стратегическая коммуникация и работа с общественным мнением" 
                }
              ].map((item, idx) => (
                <Card key={idx} className="p-6 bg-white hover:shadow-lg transition-all border border-border">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={item.icon} size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            <img 
              src="https://cdn.poehali.dev/projects/663ee447-add9-4d61-a565-0705558e3203/files/013a9479-f552-4b62-95a6-b88e2ff54c29.jpg" 
              alt="Командная работа" 
              className="w-full h-[350px] object-cover rounded-2xl"
            />
            <img 
              src="https://cdn.poehali.dev/projects/663ee447-add9-4d61-a565-0705558e3203/files/fc7ba270-3119-49b8-94dc-b63f88692fb4.jpg" 
              alt="Создание контента" 
              className="w-full h-[350px] object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>

      <section id="program" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Программа обучения
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Двухдневная интенсивная программа с балансом теории и практики
          </p>
          <Accordion type="single" collapsible className="space-y-6">
            <AccordionItem value="day1" className="bg-white rounded-xl border border-border overflow-hidden">
              <AccordionTrigger className="px-8 py-6 text-left hover:no-underline">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shrink-0">
                    <span className="font-black text-lg">1</span>
                  </div>
                  <div>
                    <div className="text-2xl font-black mb-1">День 1</div>
                    <div className="text-base font-normal text-muted-foreground">Тексты, контент и системность</div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-8 pt-0">
                <div className="space-y-4 pl-16">
                  <div className="flex gap-3 items-start">
                    <div className="w-1.5 h-1.5 bg-foreground rounded-full mt-2.5 shrink-0"></div>
                    <div>
                      <h4 className="font-bold mb-1">ИИ без мифов</h4>
                      <p className="text-muted-foreground">Где он реально помогает в коммуникациях</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="w-1.5 h-1.5 bg-foreground rounded-full mt-2.5 shrink-0"></div>
                    <div>
                      <h4 className="font-bold mb-1">Контент-генерация</h4>
                      <p className="text-muted-foreground">Посты, пресс-релизы, заявления, заголовки</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="w-1.5 h-1.5 bg-foreground rounded-full mt-2.5 shrink-0"></div>
                    <div>
                      <h4 className="font-bold mb-1">Промпт-инжиниринг</h4>
                      <p className="text-muted-foreground">Для PR, СМИ и соцсетей — практические шаблоны</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="w-1.5 h-1.5 bg-foreground rounded-full mt-2.5 shrink-0"></div>
                    <div>
                      <h4 className="font-bold mb-1">Мультиканальность</h4>
                      <p className="text-muted-foreground">Один инфоповод → Telegram, ВК, СМИ, сайт</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="w-1.5 h-1.5 bg-foreground rounded-full mt-2.5 shrink-0"></div>
                    <div>
                      <h4 className="font-bold mb-1">Контент-планирование</h4>
                      <p className="text-muted-foreground">Работа «впрок» с ИИ-ассистентами</p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="day2" className="bg-white rounded-xl border border-border overflow-hidden">
              <AccordionTrigger className="px-8 py-6 text-left hover:no-underline">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center shrink-0">
                    <span className="font-black text-lg text-white">2</span>
                  </div>
                  <div>
                    <div className="text-2xl font-black mb-1">День 2</div>
                    <div className="text-base font-normal text-muted-foreground">Визуал, аналитика и автоматизация</div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-8 pt-0">
                <div className="space-y-4 pl-16">
                  <div className="flex gap-3 items-start">
                    <div className="w-1.5 h-1.5 bg-foreground rounded-full mt-2.5 shrink-0"></div>
                    <div>
                      <h4 className="font-bold mb-1">Визуальный контент</h4>
                      <p className="text-muted-foreground">Создание изображений и презентаций с ИИ</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="w-1.5 h-1.5 bg-foreground rounded-full mt-2.5 shrink-0"></div>
                    <div>
                      <h4 className="font-bold mb-1">Мониторинг медиа</h4>
                      <p className="text-muted-foreground">Отслеживание СМИ и соцсетей, поиск трендов</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="w-1.5 h-1.5 bg-foreground rounded-full mt-2.5 shrink-0"></div>
                    <div>
                      <h4 className="font-bold mb-1">Аналитические справки</h4>
                      <p className="text-muted-foreground">Репутационные риски и автоматический анализ</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="w-1.5 h-1.5 bg-foreground rounded-full mt-2.5 shrink-0"></div>
                    <div>
                      <h4 className="font-bold mb-1">ИИ-ассистенты и боты</h4>
                      <p className="text-muted-foreground">Telegram-боты для автоматизации рутины</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="w-1.5 h-1.5 bg-foreground rounded-full mt-2.5 shrink-0"></div>
                    <div>
                      <h4 className="font-bold mb-1">План внедрения</h4>
                      <p className="text-muted-foreground">Пошаговая стратегия внедрения ИИ за 30 дней</p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="results" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Что унесут участники
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
            Практические инструменты для немедленного применения в работе
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: "BookOpen", title: "Библиотека промптов", desc: "Готовые шаблоны под вашу деятельность — от пресс-релизов до постов в соцсети" },
              { icon: "FileText", title: "Набор готовых материалов", desc: "Примеры текстов и визуалов, созданных на обучении с применением ИИ" },
              { icon: "CalendarDays", title: "Контент-план", desc: "Готовый план публикаций на 2-4 недели для всех каналов коммуникации" },
              { icon: "BarChart3", title: "Инструменты аналитики", desc: "Шаблоны для мониторинга медиа и автоматизации рутинных процессов" },
              { icon: "Lightbulb", title: "Практические навыки", desc: "Понимание, как использовать ИИ ежедневно для решения рабочих задач" },
              { icon: "Rocket", title: "Конкурентное преимущество", desc: "ИИ — новый стандарт работы для современных коммуникаций" }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-5 items-start p-6 rounded-xl border border-border hover:shadow-lg transition-all bg-muted/30">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <Icon name={item.icon} size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 p-10 border-2 border-primary rounded-2xl bg-primary/5">
            <div className="max-w-3xl">
              <h3 className="text-3xl font-black mb-4">Ключевая идея программы</h3>
              <p className="text-lg leading-relaxed">
                ИИ — это новый стандарт работы для коммуникаций. 
                Не теория. Не хайп. А практический инструмент для результата.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="register" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-3">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Регистрация на обучение
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Заполните форму, и мы свяжемся с вами для уточнения деталей и подтверждения участия.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4 items-start p-5 rounded-xl bg-white border border-border">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Icon name="MapPin" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Адрес проведения</h4>
                    <p className="text-muted-foreground">Будет объявлен после регистрации</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start p-5 rounded-xl bg-white border border-border">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Icon name="Calendar" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Даты проведения</h4>
                    <p className="text-muted-foreground">Уточняются индивидуально</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start p-5 rounded-xl bg-white border border-border">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Icon name="Clock" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Время занятий</h4>
                    <p className="text-muted-foreground">8-9 часов каждый день (с перерывами)</p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="md:col-span-2 p-8 bg-white">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-bold mb-2">Ваше имя *</label>
                  <Input 
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Email *</label>
                  <Input 
                    type="email"
                    placeholder="ivan@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Телефон *</label>
                  <Input 
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Комментарий</label>
                  <Textarea 
                    placeholder="Расскажите о своей сфере деятельности..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full h-12 text-base font-bold bg-secondary hover:bg-secondary/90 text-white">
                  Отправить заявку
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Частые вопросы
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Ответы на популярные вопросы об обучении
          </p>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="q1" className="bg-muted/30 rounded-xl border border-border px-6">
              <AccordionTrigger className="text-lg font-bold hover:no-underline py-5">
                Нужны ли специальные знания для участия?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                Нет, специальных технических знаний не требуется. Программа разработана для специалистов в коммуникациях, 
                которые хотят освоить практическое применение ИИ в своей работе. Весь материал подаётся доступным языком.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q2" className="bg-muted/30 rounded-xl border border-border px-6">
              <AccordionTrigger className="text-lg font-bold hover:no-underline py-5">
                Что нужно взять с собой?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                Потребуется ноутбук для практических заданий. Все необходимые инструменты и доступы будут предоставлены 
                на обучении. Также рекомендуем взять блокнот для заметок.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q3" className="bg-muted/30 rounded-xl border border-border px-6">
              <AccordionTrigger className="text-lg font-bold hover:no-underline py-5">
                Выдаётся ли сертификат?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                Да, по окончании обучения все участники получают сертификат о прохождении программы. 
                Также вы унесёте с собой все практические материалы и инструменты.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q4" className="bg-muted/30 rounded-xl border border-border px-6">
              <AccordionTrigger className="text-lg font-bold hover:no-underline py-5">
                Есть ли возможность дистанционного участия?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                Данная программа проводится только в очном формате для максимальной эффективности практических занятий 
                и живого взаимодействия. Онлайн-формат может быть рассмотрен в будущем.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q5" className="bg-muted/30 rounded-xl border border-border px-6">
              <AccordionTrigger className="text-lg font-bold hover:no-underline py-5">
                Какие ИИ-инструменты будут использоваться?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                Мы работаем с актуальными ИИ-платформами для генерации текста, изображений и аналитики. 
                Конкретный список инструментов предоставляется участникам перед началом обучения.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <footer className="py-16 px-4 bg-muted/30 border-t border-border">
        <div className="container mx-auto text-center">
          <div className="text-xl font-black mb-4">ИИ для коммуникаций</div>
          <p className="text-muted-foreground mb-8">
            Практический инструмент для результата
          </p>
          <div className="flex justify-center gap-8 mb-8 text-sm font-medium">
            <a href="#audience" className="hover:text-primary transition-colors">Для кого</a>
            <a href="#program" className="hover:text-primary transition-colors">Программа</a>
            <a href="#results" className="hover:text-primary transition-colors">Результаты</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
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
