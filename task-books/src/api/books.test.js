// import getAllBooks from './books';

// test('API test', () => {
//   expect(getAllBooks()).toBeInstanceOf(Promise);
// });
import axios from 'axios';
import moxios from 'moxios';
import sinon from 'sinon';
import { equal } from 'assert';

describe('mocking axios requests', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('just for a single spec', (done) => {
    moxios.withMock(() => {
      const onFulfilled = sinon.spy();
      axios.get('/books/1').then(onFulfilled);
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {
            id: 1,
            bookName: 'Divine comedy'
          }
        }).then(() => {
          equal(onFulfilled.called, true);
          done();
        });
      });
    });
  });
});
