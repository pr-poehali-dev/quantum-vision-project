import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 mb-6">
              <Icon name="Calculator" size={40} className="text-primary" />
            </div>
            <h1 className="text-6xl font-light text-gray-900 mb-6 tracking-tight">
              Калькулятор
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Простой и удобный калькулятор для быстрых математических вычислений
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8 hover:shadow-xl transition-all border-2 hover:border-primary/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Icon name="Zap" size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    Мгновенные расчёты
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Быстрое выполнение базовых математических операций
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all border-2 hover:border-primary/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
                  <Icon name="Sparkles" size={24} className="text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    Чистый интерфейс
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Минималистичный дизайн без лишних элементов
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all border-2 hover:border-primary/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center flex-shrink-0">
                  <Icon name="Layout" size={24} className="text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    Простота
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Интуитивно понятный интерфейс для всех пользователей
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all border-2 hover:border-primary/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0">
                  <Icon name="Smartphone" size={24} className="text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    Адаптивность
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Работает на всех устройствах и размерах экрана
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center">
            <Link to="/calculator">
              <Button size="lg" className="text-lg px-12 py-6 h-auto shadow-lg hover:shadow-xl transition-all">
                Открыть калькулятор
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <footer className="border-t border-gray-200 mt-20">
        <div className="container mx-auto px-6 py-8">
          <p className="text-center text-gray-500 text-sm">
            © 2024 Калькулятор. Все операции выполняются локально.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
