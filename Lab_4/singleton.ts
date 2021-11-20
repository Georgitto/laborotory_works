class Singleton {
  private static instance: Singleton;

  private sortOfData: string;

  private constructor() {
    this.sortOfData = 'Some important info.';
  }

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  public someVeryUsefulFunction() {
    let counter = 0;
    return function () {
      counter += 1;
      return counter;
    };
  }
}

function client() {
  const user1 = Singleton.getInstance();
  const user2 = Singleton.getInstance();

  if (user1 === user2) {
    console.log('Обе переменные содержат одинаковую сущность.');
  } else {
    console.log('Ошибка, переменные содержат разные сущности.');
  }
}

export default client;
