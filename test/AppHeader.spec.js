import { mount, createLocalVue } from '@vue/test-utils';
import { BootstrapVue } from 'bootstrap-vue';
import AppHeader from '@/components/app/AppHeader.vue';

const localVue = createLocalVue();

localVue.use(BootstrapVue);

describe('Header', () => {
  test('Instructions menu item exists', () => {
    let wrapper = mount(AppHeader, {
      localVue,
    });
    const instructionsMenuItem = wrapper.find('#instructions-modal-opener');

    expect(instructionsMenuItem.exists()).toBe(true);
  });

  test('VBModal directive is called when clickin instructions menu item (Instructions modal is opened)', async () => {
    const spy = jest.fn();
    let wrapper = mount(AppHeader, {
      localVue,
      directives: {
        bModal: spy,
      },
    });
    const instructionsMenuItem = wrapper.find('#instructions-modal-opener');

    await instructionsMenuItem.trigger('click');
    expect(spy).toHaveBeenCalled();
  });
});
