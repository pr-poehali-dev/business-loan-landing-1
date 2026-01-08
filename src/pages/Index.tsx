import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [loanAmount, setLoanAmount] = useState(1000000);
  const [loanTerm, setLoanTerm] = useState(12);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    inn: ''
  });

  const interestRate = 12.5;
  const monthlyPayment = (loanAmount * (interestRate / 100 / 12)) / (1 - Math.pow(1 + (interestRate / 100 / 12), -loanTerm));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Заявка отправлена:', formData, { loanAmount, loanTerm });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-background">
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="TrendingUp" size={32} className="text-primary" />
            <span className="text-2xl font-bold text-secondary">БизнесКредит</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors">Преимущества</a>
            <a href="#process" className="text-muted-foreground hover:text-foreground transition-colors">Процесс</a>
            <a href="#reviews" className="text-muted-foreground hover:text-foreground transition-colors">Отзывы</a>
            <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
          </nav>
          <Button variant="outline" className="hidden md:flex">
            <Icon name="Phone" size={18} className="mr-2" />
            +7 (495) 123-45-67
          </Button>
        </div>
      </header>

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6 leading-tight">
                Кредит для бизнеса<br />
                <span className="text-primary">за 24 часа</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Одобрение без бюрократии. Работаем со сложными кейсами.<br />
                Прозрачные условия без скрытых комиссий.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle" size={20} className="text-primary" />
                  <span className="text-sm">От 100 тыс. до 50 млн ₽</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle" size={20} className="text-primary" />
                  <span className="text-sm">Ставка от 9% годовых</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle" size={20} className="text-primary" />
                  <span className="text-sm">Срок до 5 лет</span>
                </div>
              </div>
            </div>

            <Card className="animate-scale-in shadow-2xl border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">Рассчитайте кредит онлайн</CardTitle>
                <CardDescription>Узнайте условия за 30 секунд</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <Label className="text-base">Сумма кредита: <span className="font-bold text-primary">{loanAmount.toLocaleString('ru-RU')} ₽</span></Label>
                  <Slider
                    value={[loanAmount]}
                    onValueChange={(value) => setLoanAmount(value[0])}
                    min={100000}
                    max={50000000}
                    step={100000}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>100 тыс. ₽</span>
                    <span>50 млн ₽</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label className="text-base">Срок кредита: <span className="font-bold text-primary">{loanTerm} мес.</span></Label>
                  <Slider
                    value={[loanTerm]}
                    onValueChange={(value) => setLoanTerm(value[0])}
                    min={3}
                    max={60}
                    step={3}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>3 мес.</span>
                    <span>60 мес.</span>
                  </div>
                </div>

                <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">Ежемесячный платеж:</span>
                    <span className="text-2xl font-bold text-primary">{monthlyPayment.toLocaleString('ru-RU', { maximumFractionDigits: 0 })} ₽</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Процентная ставка:</span>
                    <span className="font-semibold">{interestRate}% годовых</span>
                  </div>
                </div>

                <Button className="w-full h-12 text-base" size="lg">
                  <Icon name="FileText" size={20} className="mr-2" />
                  Получить одобрение
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-secondary">
            Почему выбирают нас
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Более 5 000 компаний уже получили финансирование для развития своего бизнеса
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: 'Zap',
                title: 'Быстрое решение',
                description: 'Рассмотрение заявки и одобрение в течение 24 часов. Деньги на счёт за 2-3 дня.'
              },
              {
                icon: 'Shield',
                title: 'Без скрытых платежей',
                description: 'Прозрачные условия. Все комиссии и ставки известны заранее. Никаких сюрпризов.'
              },
              {
                icon: 'Users',
                title: 'Индивидуальный подход',
                description: 'Персональный менеджер для каждого клиента. Учитываем специфику вашего бизнеса.'
              },
              {
                icon: 'Award',
                title: 'Работа со сложными кейсами',
                description: 'Одобряем заявки с плохой кредитной историей и нестандартными бизнес-моделями.'
              }
            ].map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:border-primary/50 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={benefit.icon as any} size={28} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-secondary">
            Как получить кредит
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Простой процесс в 4 шага — от заявки до получения денег
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20"></div>
              
              {[
                {
                  step: 1,
                  title: 'Оставьте заявку',
                  description: 'Заполните простую форму или позвоните нам. Расскажите о своих потребностях и целях кредитования.',
                  time: '5 минут'
                },
                {
                  step: 2,
                  title: 'Получите предварительное решение',
                  description: 'Наш специалист свяжется с вами, обсудит условия и запросит необходимые документы для анализа.',
                  time: '2-4 часа'
                },
                {
                  step: 3,
                  title: 'Предоставьте документы',
                  description: 'Отправьте сканы или фото документов: паспорт, уставные документы, выписки. Помогаем собрать пакет.',
                  time: '1 день'
                },
                {
                  step: 4,
                  title: 'Получите деньги',
                  description: 'После одобрения подписываем договор онлайн или в офисе. Перечисляем средства на ваш расчётный счёт.',
                  time: '2-3 дня'
                }
              ].map((step, index) => (
                <div key={index} className="relative flex gap-6 mb-12 last:mb-0 animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-secondary">{step.title}</h3>
                      <span className="text-sm text-primary font-semibold bg-primary/10 px-3 py-1 rounded-full ml-4">
                        {step.time}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="h-12 px-8 text-base">
              <Icon name="Rocket" size={20} className="mr-2" />
              Начать процесс
            </Button>
          </div>
        </div>
      </section>

      <section id="requirements" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-secondary">
            Требования и документы
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Минимальный пакет документов для быстрого одобрения
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Icon name="Building2" size={24} className="text-primary" />
                  Для юридических лиц
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    'Регистрация бизнеса от 6 месяцев',
                    'Выручка от 500 тыс. ₽ в месяц',
                    'Уставные документы (ОГРН, ИНН)',
                    'Банковские выписки за 6 месяцев',
                    'Бухгалтерская отчётность',
                    'Паспорт руководителя и учредителей'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Icon name="CheckCircle2" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Icon name="User" size={24} className="text-primary" />
                  Для индивидуальных предпринимателей
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    'Регистрация ИП от 3 месяцев',
                    'Выручка от 200 тыс. ₽ в месяц',
                    'Свидетельство о регистрации ИП',
                    'Выписка из ЕГРИП',
                    'Банковские выписки за 3-6 месяцев',
                    'Паспорт предпринимателя'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Icon name="CheckCircle2" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <Card className="bg-primary/5 border-primary/30">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Icon name="Info" size={24} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-2">Не соответствуете требованиям?</p>
                    <p className="text-sm text-muted-foreground">
                      Мы работаем со сложными случаями: молодой бизнес, небольшая выручка, плохая кредитная история.
                      Свяжитесь с нами — найдём индивидуальное решение для вашей ситуации.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-secondary">
            Истории успеха наших клиентов
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Реальные результаты компаний, получивших финансирование
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: 'Александр Петров',
                position: 'Генеральный директор',
                company: 'ООО "ТехноСтрой"',
                text: 'Получили 5 млн рублей на закупку оборудования. Одобрение заняло всего 18 часов. Прибыль выросла на 40% за квартал.',
                amount: '5 000 000 ₽',
                result: '+40% прибыль'
              },
              {
                name: 'Елена Соколова',
                position: 'Владелец бизнеса',
                company: 'ИП Соколова Е.А.',
                text: 'Нужен был кредит срочно для расширения точки. Деньги получила за 3 дня. Открыла второй магазин и удвоила оборот.',
                amount: '1 500 000 ₽',
                result: '×2 оборот'
              },
              {
                name: 'Дмитрий Козлов',
                position: 'Финансовый директор',
                company: 'ООО "Логистика+"',
                text: 'Банк отказал из-за кредитной истории. Здесь одобрили 10 млн на пополнение оборотных средств. Теперь работаем стабильно.',
                amount: '10 000 000 ₽',
                result: 'Стабильность'
              }
            ].map((review, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <Icon name="User" size={24} className="text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-base">{review.name}</CardTitle>
                      <CardDescription className="text-sm">{review.position}</CardDescription>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Icon key={star} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 italic">"{review.text}"</p>
                  <div className="flex justify-between items-center pt-4 border-t">
                    <div>
                      <p className="text-xs text-muted-foreground">Сумма кредита</p>
                      <p className="font-bold text-primary">{review.amount}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">Результат</p>
                      <p className="font-bold text-secondary">{review.result}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-secondary">
            Часто задаваемые вопросы
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Ответы на самые популярные вопросы о кредитовании бизнеса
          </p>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: 'Сколько времени занимает рассмотрение заявки?',
                  answer: 'Предварительное решение вы получите в течение 2-4 часов после подачи заявки. Полное одобрение с проверкой документов занимает до 24 часов. После одобрения деньги поступают на счёт в течение 2-3 рабочих дней.'
                },
                {
                  question: 'Какие документы нужны для получения кредита?',
                  answer: 'Минимальный пакет: паспорт, уставные документы компании, банковские выписки за 3-6 месяцев. Для ООО дополнительно требуется бухгалтерская отчётность. Полный список зависит от суммы кредита и специфики бизнеса.'
                },
                {
                  question: 'Могу ли я получить кредит с плохой кредитной историей?',
                  answer: 'Да, мы работаем со сложными кейсами. Каждую заявку рассматриваем индивидуально. Даже при наличии просрочек или отказов от других банков есть шанс на одобрение. Важнее текущее финансовое состояние бизнеса и перспективы.'
                },
                {
                  question: 'Есть ли скрытые комиссии или дополнительные платежи?',
                  answer: 'Нет. Все условия прозрачны и известны заранее: процентная ставка, срок, график платежей. Никаких скрытых комиссий за выдачу, обслуживание или досрочное погашение. Что видите в расчёте — то и платите.'
                },
                {
                  question: 'Можно ли досрочно погасить кредит?',
                  answer: 'Да, досрочное погашение возможно в любой момент без штрафов и комиссий. Вы платите только за фактический срок пользования кредитом. Можно погасить как всю сумму сразу, так и частично уменьшить долг.'
                },
                {
                  question: 'Какие цели кредитования вы одобряете?',
                  answer: 'Мы финансируем любые бизнес-цели: пополнение оборотных средств, закупка оборудования, расширение производства, открытие новых точек, выкуп помещения, рефинансирование других кредитов. Главное — чтобы средства шли на развитие бизнеса.'
                },
                {
                  question: 'Нужно ли залоговое обеспечение?',
                  answer: 'Зависит от суммы кредита. До 3 млн рублей можно получить без залога. На большие суммы требуется обеспечение: недвижимость, оборудование, транспорт, товары на складе или поручительство. Обсуждаем индивидуально.'
                },
                {
                  question: 'Работаете ли вы с начинающим бизнесом?',
                  answer: 'Да, рассматриваем заявки от компаний с минимальным стажем от 3 месяцев для ИП и от 6 месяцев для ООО. Для молодого бизнеса можем запросить дополнительное обеспечение или личное поручительство учредителей.'
                }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-card border rounded-lg px-6 hover:border-primary/50 transition-colors">
                  <AccordionTrigger className="text-left hover:text-primary hover:no-underline py-4">
                    <span className="font-semibold pr-4">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-secondary to-secondary/90">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-primary/20 shadow-2xl">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl md:text-4xl mb-3">Получите кредит для бизнеса</CardTitle>
              <CardDescription className="text-base">
                Заполните форму — наш специалист свяжется с вами в течение 15 минут
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя *</Label>
                    <Input
                      id="name"
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="h-11"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company">Название компании *</Label>
                    <Input
                      id="company"
                      placeholder="ООО «Ваша компания»"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      required
                      className="h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="inn">ИНН</Label>
                    <Input
                      id="inn"
                      placeholder="1234567890"
                      value={formData.inn}
                      onChange={(e) => setFormData({ ...formData, inn: e.target.value })}
                      className="h-11"
                    />
                  </div>
                </div>

                <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Запрашиваемая сумма</p>
                      <p className="text-2xl font-bold text-primary">{loanAmount.toLocaleString('ru-RU')} ₽</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Срок кредита</p>
                      <p className="text-2xl font-bold text-primary">{loanTerm} месяцев</p>
                    </div>
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full h-12 text-base">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных данных и принимаете{' '}
                  <a href="#" className="text-primary hover:underline">политику конфиденциальности</a>
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="TrendingUp" size={28} className="text-primary" />
                <span className="text-xl font-bold">БизнесКредит</span>
              </div>
              <p className="text-sm text-gray-300">
                Кредитование юридических лиц и индивидуальных предпринимателей с 2015 года
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Лицензии</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Партнёры</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Вакансии</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-primary transition-colors">Кредит для ООО</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Кредит для ИП</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Рефинансирование</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Лизинг оборудования</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <a href="tel:+74951234567" className="hover:text-primary transition-colors">+7 (495) 123-45-67</a>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <a href="mailto:info@bizcredit.ru" className="hover:text-primary transition-colors">info@bizcredit.ru</a>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, ул. Примерная, д. 1</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-600 pt-8 text-center text-sm text-gray-400">
            <p className="mb-2">
              © 2025 БизнесКредит. Все права защищены. 
            </p>
            <p className="text-xs">
              Предоставление займов осуществляется на основании лицензии ЦБ РФ. Процентная ставка от 9% годовых.
              Полная стоимость кредита рассчитывается индивидуально.
            </p>
            <div className="mt-4 flex justify-center gap-6 text-xs">
              <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-primary transition-colors">Пользовательское соглашение</a>
              <a href="#" className="hover:text-primary transition-colors">Раскрытие информации</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
