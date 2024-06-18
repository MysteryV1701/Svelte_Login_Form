import { c as create_ssr_component, a as subscribe, v as validate_component } from './ssr-CIFjU9jP.js';
import { I, a as InputText, b as InputPassword } from './index3-6a7PnAgg.js';
import { B as Button } from './Button-Vgin9XLY.js';
import { L as Link } from './Link-DbVsHwjD.js';
import { p as page } from './stores-1wXTUDON.js';
import './client-CjdeEz1m.js';
import './index2-C_YCgMDo.js';
import './exports-DuWZopOC.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  let $emailInput, $$unsubscribe_emailInput;
  let $passwordInput, $$unsubscribe_passwordInput;
  let $form, $$unsubscribe_form;
  $$unsubscribe_page = subscribe(page, (value) => value);
  const form = I();
  $$unsubscribe_form = subscribe(form, (value) => $form = value);
  const emailInput = form.field({ onDirty: true });
  $$unsubscribe_emailInput = subscribe(emailInput, (value) => $emailInput = value);
  const passwordInput = form.field({ onDirty: true });
  $$unsubscribe_passwordInput = subscribe(passwordInput, (value) => $passwordInput = value);
  const credentials = { email: "", password: "" };
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-18hoje6_START -->${$$result.title = `<title>Login Form</title>`, ""}<meta name="robots" content="noindex, nofollow"><!-- HEAD_svelte-18hoje6_END -->`, ""} <div class="flex justify-center my-3 max-w-full"><form id="signIn" autocomplete="on" novalidate class="mt-3 grid gap-5 w-[28rem] py-4"><div class="" data-svelte-h="svelte-j6kexz"><h4 class="font-bold text-4xl mb-1 text-center">Welcome Back</h4> <p class="text-center font-normal text-xl">Welcome to our community</p></div> <div class="justify-self-center w-fit">${validate_component(Button, "Button").$$render(
      $$result,
      {
        type: "button",
        variant: "outline",
        title: "Google Login Auth",
        id: "googleButton"
      },
      {},
      {
        default: () => {
          return `
				Google`;
        }
      }
    )}</div> <div class="relative z-10 text-center after:absolute after:top-3 after:left-0 after:w-full after:border after:border-gray-300 after:-z-10 w-full" data-svelte-h="svelte-19irww5"><span class="uppercase text-sm px-3 bg-gray-100">or</span></div> <div class="">${validate_component(InputText, "InputText").$$render(
      $$result,
      {
        type: "email",
        id: $emailInput.id,
        field: emailInput,
        required: true,
        pattern: "^[w-.]+@([w-]+.)+[w-]{2,4}$",
        placeholder: "Enter your email",
        invalidText: $emailInput.valueMissing ? "Email is required" : $emailInput.typeMismatch ? "Email not available" : $emailInput.patternMismatch ? "Email error syntax" : "",
        showMessage: !$emailInput.show,
        value: credentials.email
      },
      {
        value: ($$value) => {
          credentials.email = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div class="">${validate_component(InputPassword, "InputPassword").$$render(
      $$result,
      {
        field: passwordInput,
        min: 8,
        max: 30,
        id: "password",
        required: true,
        placeholder: "Enter your password",
        invalidText: $passwordInput.valueMissing ? "Password is required" : $passwordInput.tooShort ? "Password must has 8 character" : $passwordInput.patternMismatch ? "Must contain at least one uppercase, lowercase, and number" : "",
        showMessage: !$passwordInput.show,
        value: credentials.password
      },
      {
        value: ($$value) => {
          credentials.password = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div></div></div> <div class="w-full flex justify-between"><div class="flex gap-2 items-center" data-svelte-h="svelte-yqp3zt"><input type="checkbox" name="remember" id="remember"> <p>Remember me</p></div> <div class="">${validate_component(Link, "Link").$$render(
      $$result,
      {
        href: "/forget",
        underline: true,
        typeText: true
      },
      {},
      {
        default: () => {
          return `Recover Password`;
        }
      }
    )}</div></div> ${``} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        type: "submit",
        variant: "outline",
        title: "Login Button",
        size: "lg",
        disable: !$form.valid,
        classStyled: " w-full uppercase border-2 border-gray-500 group-invalid:pointer-events-none group-invalid:opacity-30"
      },
      {},
      {
        default: () => {
          return `log in`;
        }
      }
    )}</form></div>`;
  } while (!$$settled);
  $$unsubscribe_page();
  $$unsubscribe_emailInput();
  $$unsubscribe_passwordInput();
  $$unsubscribe_form();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BgLkwkx2.js.map
