import { TodoDirective } from './todo.directive';

describe('TodoDirective', () => {
  it('should create an instance', () => {
    const elRefMock = jasmine.createSpyObj('ElementRef', ['nativeElement']);
    const directive = new TodoDirective(elRefMock);
    expect(directive).toBeTruthy();
  });
});
