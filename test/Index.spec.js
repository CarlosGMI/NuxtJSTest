import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import Index from '~/pages/index.vue';
import Vuex from 'vuex';
import sellersListMock from './__mocks__/sellersList.json';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Index page', () => {
  it('Calls "fetchSellersList" on mounted Index', () => {
    const actions = {
      'sellers/fetchSellersList': jest.fn(),
    };
    const getters = {
      'sellers/getSellersList': jest.fn(),
    };
    const store = new Vuex.Store({
      modules: {
        sellers: {
          actions,
          getters,
        },
      },
    });
    const wrapper = mount(Index, {
      store,
      localVue,
      stubs: {
        RaceForm: true,
      },
    });

    expect(actions['sellers/fetchSellersList']).toHaveBeenCalled();
  });

  // it('"fetchSellersList" action commits an array', async () => {
  //   jest.doMock('axios', () => ({
  //     get: jest.fn(() => Promise.resolve({ sellers: sellersListMock })),
  //   }));

  //   const actions = {
  //     'sellers/fetchSellersList': jest.fn(() =>
  //       Promise.resolve({ sellers: sellersListMock })
  //     ),
  //   };
  //   const getters = {
  //     'sellers/getSellersList': jest.fn(),
  //   };
  //   const store = new Vuex.Store({
  //     modules: {
  //       sellers: {
  //         actions,
  //         getters,
  //       },
  //     },
  //   });

  //   await store.dispatch('sellers/fetchSellersList');
  //   expect(store.getters['sellers/getSellersList']).toEqual(sellersListMock);
  // });
});
