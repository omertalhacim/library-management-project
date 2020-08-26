import { shallowMount } from "@vue/test-utils";
import Navbar from "@/components/Navbar.vue";
import HomeNavigator from "@/components/HomeNavigator.vue";

describe("Navbar.vue", () => {
  it("renders props.homeText when passed", () => {
    const homeText = "Home";
    const wrapper = shallowMount(Navbar, {
      propsData: { homeText },
    });
    expect(wrapper.text()).toMatch(homeText);
  });
});

describe("Navbar.vue", () => {
  it("renders props.navbarHeader when passed", () => {
    const navbarHeader = "My Navbar Header";
    const wrapper = shallowMount(Navbar, {
      propsData: { navbarHeader },
    });
    expect(wrapper.text()).toMatch(navbarHeader);
  });
});

describe("HomeNavigator.vue", () => {
  it("renders props.menuHeader when passed", () => {
    const menuHeader = "My Menu Header";
    const wrapper = shallowMount(HomeNavigator, {
      propsData: { menuHeader },
    });
    expect(wrapper.text()).toMatch(menuHeader);
  });
});
