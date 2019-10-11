import { shallowMount } from '@vue/test-utils';
import TimeLine from '@/components/TimeLine.vue';

describe('TimeLine.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(TimeLine, {
      propsData: { },
    });
  });
});
