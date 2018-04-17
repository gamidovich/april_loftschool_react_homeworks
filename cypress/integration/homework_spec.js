<<<<<<< HEAD
describe('homework', () => {
  before(() => {
    cy.visit('/');
  });

  describe('Общая верстка', () => {
    describe('Присутствие тегов', () => {
      it('Присутствует .component-list__name с именем VideoPlayer', () => {
        cy.get('.component-list__name').contains('VideoPlayer');
      });
      it('Присутствует .component-list__name с именем Card number formating', () => {
        cy.get('.component-list__name').contains('Card number formating');
      });
      it('Присутствует .component-list__name с именем ModalButton', () => {
        cy.get('.component-list__name').contains('ModalButton');
      });

      it('Присутствует тег hr', () => {
        cy.get('hr');
      });
    });
  });

  describe('VideoPlayer', () => {
    describe('Верстка', () => {
      it('Присутствует video тег', () => {
        cy.get('video');
      });
      it('Присутствует кнопка с надписью Play', () => {
        cy.get('button').contains('Play');
      });
      it('Присутствует кнопка с надписью Stop', () => {
        cy.get('button').contains('Stop');
      });
    });
    describe('Логика', () => {
      it('Включает видео при нажатии на кнопку с надписью Play', () => {
        cy
          .get('button')
          .contains('Play')
          .click();
        cy.wait(300);
        cy.get('video').then($tag => {
          expect($tag[0].paused).to.eq(false);
          expect($tag[0].ended).to.eq(false);
          expect($tag[0].currentTime).to.be.gt(0);
        });
      });
      it('Выключает видео при нажатии на кнопку с надписью Stop', () => {
        cy
          .get('button')
          .contains('Play')
          .click();
        cy.wait(300);
        cy
          .get('button')
          .contains('Stop')
          .click();

        cy.get('video').then($tag => {
          expect($tag[0].paused).to.eq(true);
          expect($tag[0].ended).to.eq(false);
          expect($tag[0].currentTime).to.be.gt(0);
        });
      });
    });
  });

  describe('Card number formating', () => {
    before(() => {
      cy
        .get('.component-list__name')
        .contains('Card number formating')
        .click();
    });

    describe('Верстка', () => {
      it('Присутствует video тег', () => {
        cy.get('input');
      });
    });

    describe('Логика', () => {
      it('Форматирует ввод, после 4го символа появляется пробел', () => {
        cy.get('input').type('12345{rightarrow}6789{rightarrow}0123{rightarrow}456');
        cy.get('input').and('have.value', '1234 5678 9012 3456');
      });
    });
  });

  describe('ModalButton', () => {
    beforeEach(() => {
      cy.reload();
      cy
        .get('.component-list__name')
        .contains('ModalButton')
        .click();
    });

    describe('Верстка', () => {
      it('Присутствует кнопка с надписью Show modal!', () => {
        cy.get('button').contains('Show modal!');
      });

      it('Модальное окно отсутствует', () => {
        cy.get('#portal .modal').and('not.exist');
      });
    });

    describe('Логика', () => {
      it('При нажатии кнопки Show modal! появляется модальное окно #portal .modal', () => {
        cy
          .get('button')
          .contains('Show modal!')
          .click();
        cy.get('#portal .modal');
      });

      it('При нажатии кнопки Close в модальном окне окно закрывается', () => {
        cy
          .get('button')
          .contains('Show modal!')
          .click();

        cy
          .get('.modal button')
          .contains('Close')
          .click();

        cy.get('#portal .modal').and('not.exist');
      });
    });
  });
=======
describe('Домашняя работа', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  describe('Верстка', () => {
    it('Присутствует тег nav', () => {
      cy.get('nav');
    });
    it('Присутствует ссылка «Войти» на /login', () => {
      cy
        .get('a')
        .contains('Войти')
        .should('have.attr', 'href', '/login');
    });
    it('Присутствует ссылка «Секретная страница» на /private', () => {
      cy
        .get('a')
        .contains('Секретная страница')
        .should('have.attr', 'href', '/private');
    });
    it('Присутствует ссылка «Главная» на /', () => {
      cy
        .get('a')
        .contains('Главная')
        .should('have.attr', 'href', '/');
    });
  });

  describe('Сценарий входа', () => {
    it('Приватная страница должна редиректить на страницу /login', () => {
      cy.visit('/private');

      cy.location().should(location => {
        expect(location.pathname).to.eq('/login')
      })
    })
    it('После ввода логина и пароля должен на странице /login предиректит на /', () => {
      cy.visit('/login');

      cy.get('input[name="email"]').type('student');
      cy.get('input[name="password"]').type('123');
      cy.get('button').click();

      cy.location().should(location => {
        expect(location.pathname).to.eq('/')
      })
    })
    it('После ввода логина и неверного пароля должен появится тег p.error', () => {
      cy.visit('/login');

      cy.get('input[name="email"]').type('student');
      cy.get('input[name="password"]').type('wrong password');
      cy.get('button').click();

      cy.get('p.error')
    })
    it('После ввода авторизации можно войти на private', () => {
      cy.visit('/login');

      cy.get('input[name="email"]').type('student');
      cy.get('input[name="password"]').type('123');
      cy.get('button').click();

      cy
        .get('a')
        .contains('Секретная страница')
        .click()

        cy.get('p').contains('Private page');
    })
  })
>>>>>>> ee9154f469f88197cfa8ca9daceaa7860685ba7e
});
