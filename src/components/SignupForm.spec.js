import { shallowMount } from '@vue/test-utils';
import SignupForm from '@/components/SignupForm.vue';

describe('SignupForm.vue', () => {
  test('테스트', () => {
    const wrapper = shallowMount(SignupForm, {
      data() {
        return {
          username: '',
        };
      },
    });
    const username = wrapper.find('#username');
    console.log(username.html());
  });
});
