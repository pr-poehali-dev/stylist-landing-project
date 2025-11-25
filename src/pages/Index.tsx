import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      icon: "Scissors",
      title: "Стрижка",
      description: "Индивидуальный подход к каждому клиенту с учетом типа лица и структуры волос",
      price: "от 3 000 ₽"
    },
    {
      icon: "Palette",
      title: "Окрашивание",
      description: "Современные техники окрашивания: балаяж, шатуш, airtouch",
      price: "от 8 000 ₽"
    },
    {
      icon: "Sparkles",
      title: "Укладка",
      description: "Вечерние и повседневные укладки для любого повода",
      price: "от 2 500 ₽"
    },
    {
      icon: "Heart",
      title: "Уход",
      description: "Профессиональные процедуры для восстановления и питания волос",
      price: "от 4 000 ₽"
    }
  ];

  const portfolio = [
    {
      image: "https://cdn.poehali.dev/projects/012fdc91-1d83-42f4-91a5-c1f818750503/files/299a2e8e-9265-4af0-b64b-7f322b144bee.jpg",
      title: "Окрашивание"
    },
    {
      image: "https://cdn.poehali.dev/projects/012fdc91-1d83-42f4-91a5-c1f818750503/files/184341c8-ed5f-4f1a-9139-5342175073c7.jpg",
      title: "Уход и стайлинг"
    }
  ];

  const testimonials = [
    {
      name: "Анна Петрова",
      text: "Прекрасный мастер! Всегда внимательно выслушает пожелания и предложит лучший вариант. Результатом очень довольна!",
      rating: 5
    },
    {
      name: "Мария Иванова",
      text: "Хожу только к этому стилисту уже 2 года. Профессионализм на высшем уровне, приятная атмосфера.",
      rating: 5
    },
    {
      name: "Елена Смирнова",
      text: "Делала сложное окрашивание - результат превзошел все ожидания! Рекомендую всем подругам.",
      rating: 5
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                Анна Соколова
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light">
                Стилист-парикмахер
              </p>
              <p className="text-lg text-muted-foreground max-w-md">
                Создаю образы, которые подчеркивают вашу индивидуальность. 
                Более 8 лет опыта в индустрии красоты.
              </p>
              <div className="flex gap-4 pt-4">
                <Button size="lg" className="text-lg" onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}>
                  Записаться
                </Button>
                <Button size="lg" variant="outline" className="text-lg" onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
                  Портфолио
                </Button>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <img 
                src="https://cdn.poehali.dev/projects/012fdc91-1d83-42f4-91a5-c1f818750503/files/915e69ae-1bd1-422b-a63c-d48493260633.jpg"
                alt="Анна Соколова"
                className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[3/4]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Обо мне</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Я — профессиональный стилист с 8-летним опытом работы. Моя специализация — создание 
              индивидуальных образов, которые раскрывают красоту и подчеркивают уникальность каждого клиента.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Регулярно прохожу обучение у ведущих мастеров индустрии, слежу за последними трендами 
              и использую только премиальную косметику от известных брендов.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-5xl font-bold text-primary mb-2">8+</div>
                <p className="text-muted-foreground">лет опыта</p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-5xl font-bold text-primary mb-2">500+</div>
                <p className="text-muted-foreground">довольных клиентов</p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-5xl font-bold text-primary mb-2">15+</div>
                <p className="text-muted-foreground">сертификатов</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Услуги</h2>
            <p className="text-lg text-muted-foreground">Профессиональный подход к каждому клиенту</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                  <p className="text-xl font-semibold text-primary">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Портфолио</h2>
            <p className="text-lg text-muted-foreground">Примеры моих работ</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {portfolio.map((item, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <h3 className="text-white text-2xl font-semibold">{item.title}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы</h2>
            <p className="text-lg text-muted-foreground">Что говорят мои клиенты</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
              <p className="text-lg text-muted-foreground">Свяжитесь со мной для записи</p>
            </div>

            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input 
                      placeholder="Ваше имя" 
                      className="text-lg p-6"
                      required
                    />
                  </div>
                  <div>
                    <Input 
                      type="tel"
                      placeholder="Телефон" 
                      className="text-lg p-6"
                      required
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Сообщение (необязательно)" 
                      className="text-lg p-6 min-h-32"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full text-lg">
                    Отправить заявку
                  </Button>
                </form>

                <div className="mt-8 pt-8 border-t space-y-4">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Icon name="Phone" size={24} className="text-primary" />
                    <span className="text-lg">+7 (999) 123-45-67</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Icon name="Mail" size={24} className="text-primary" />
                    <span className="text-lg">anna@stylist.ru</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Icon name="MapPin" size={24} className="text-primary" />
                    <span className="text-lg">Москва, ул. Примерная, д. 10</span>
                  </div>
                </div>

                <div className="flex gap-4 justify-center mt-8 pt-8 border-t">
                  <Button variant="outline" size="icon" className="w-12 h-12">
                    <Icon name="Instagram" size={24} />
                  </Button>
                  <Button variant="outline" size="icon" className="w-12 h-12">
                    <Icon name="Phone" size={24} />
                  </Button>
                  <Button variant="outline" size="icon" className="w-12 h-12">
                    <Icon name="Mail" size={24} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 Анна Соколова. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
