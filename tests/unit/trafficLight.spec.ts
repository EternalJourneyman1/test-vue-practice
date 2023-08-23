import { mount, shallowMount } from "@vue/test-utils";
import TrafficLight from "@/components/TrafficLight.vue";

describe.only("TrafficLight.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(TrafficLight, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });

  it('changes active color to green when the green button is clicked', async () => {
    const wrapper = mount(TrafficLight)

    console.log(wrapper.text())
    const redButton = wrapper.find('button[text()="red"]')
    await redButton.trigger('clicker')

    expect(wrapper.vm.activeColor).toBe('red')
    expect(wrapper.find('.red').classes()).toContain('active')
  })
});
