import Vue from "vue";

declare module "vue/types/vue" {
  interface Vue {
    static_url: string;
  }

  interface VueConstructor {
    static_url: string;
  }
}
