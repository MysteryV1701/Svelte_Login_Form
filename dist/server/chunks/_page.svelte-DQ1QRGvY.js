import { c as create_ssr_component, a as subscribe, v as validate_component } from './ssr-CIFjU9jP.js';
import './client-CjdeEz1m.js';
import { I, a as InputText, b as InputPassword } from './index3-6a7PnAgg.js';
import { B as Button } from './Button-Vgin9XLY.js';
import './exports-DuWZopOC.js';
import './index2-C_YCgMDo.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $emailInput, $$unsubscribe_emailInput;
  let $nameInput, $$unsubscribe_nameInput;
  let $passwordInput, $$unsubscribe_passwordInput;
  let $confirmPasswordInput, $$unsubscribe_confirmPasswordInput;
  let $form, $$unsubscribe_form;
  const form = I();
  $$unsubscribe_form = subscribe(form, (value) => $form = value);
  const emailInput = form.field({ onDirty: true });
  $$unsubscribe_emailInput = subscribe(emailInput, (value) => $emailInput = value);
  const nameInput = form.field({ onDirty: true });
  $$unsubscribe_nameInput = subscribe(nameInput, (value) => $nameInput = value);
  const passwordInput = form.field({ onDirty: true });
  $$unsubscribe_passwordInput = subscribe(passwordInput, (value) => $passwordInput = value);
  const confirmPasswordInput = form.field({ onDirty: true });
  $$unsubscribe_confirmPasswordInput = subscribe(confirmPasswordInput, (value) => $confirmPasswordInput = value);
  let confirmPasswordValue = "";
  const limit = /* @__PURE__ */ new Date();
  console.log(limit);
  limit.setSeconds(limit.getSeconds() - 600);
  console.log(limit);
  let user = {
    id: 0,
    role: "customer",
    name: "",
    email: "",
    password: "",
    phone: ""
  };
  const passwordMatch = () => {
    if (!user)
      return false;
    if (!user.password)
      user.password = "";
    return user.password == confirmPasswordValue;
  };
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-hn16rm_START -->${$$result.title = `<title>Register</title>`, ""}<!-- HEAD_svelte-hn16rm_END -->`, ""} <div class="flex justify-center max-w-full"><form id="signIn" autocomplete="on" novalidate class="mt-3 grid gap-3 w-[28rem]"><div class="" data-svelte-h="svelte-1baxvts"><h4 class="font-bold text-4xl mb-1 text-center">Welcome Back</h4> <p class="text-center font-normal text-xl">Login into your account</p></div> <div class="justify-self-center w-fit">${validate_component(Button, "Button").$$render(
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
    )}</div> <div class="relative z-10 text-center after:absolute after:top-3 after:left-0 after:w-full after:border after:border-gray-300 after:-z-10 w-full" data-svelte-h="svelte-19irww5"><span class="uppercase text-sm px-3 bg-gray-100">or</span></div> <div class="grid gap-1"><div class="h-fit">${validate_component(InputText, "InputText").$$render(
      $$result,
      {
        label: "Email",
        type: "email",
        id: $emailInput.id,
        field: emailInput,
        required: true,
        pattern: "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$",
        placeholder: "Enter your email",
        invalidText: $emailInput.valueMissing ? "Email is required" : $emailInput.typeMismatch ? "Email not available" : $emailInput.patternMismatch ? "Email error syntax" : "Nice",
        showMessage: !$emailInput.show,
        value: user.email
      },
      {
        value: ($$value) => {
          user.email = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div class="h-fit">${validate_component(InputText, "InputText").$$render(
      $$result,
      {
        label: "Name",
        type: "text",
        id: $nameInput.id,
        field: nameInput,
        required: true,
        pattern: "[a-zA-Z\\s]+",
        placeholder: "Enter your name",
        invalidText: $nameInput.valueMissing ? "Name is required" : $nameInput.typeMismatch ? "Name not available" : $nameInput.patternMismatch ? "Name must be word" : "Nice",
        showMessage: !$nameInput.show,
        value: user.name
      },
      {
        value: ($$value) => {
          user.name = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div class="">${validate_component(InputPassword, "InputPassword").$$render(
      $$result,
      {
        label: "Password",
        field: passwordInput,
        min: 8,
        max: 30,
        id: "password",
        required: true,
        placeholder: "Enter your password",
        invalidText: $passwordInput.valueMissing ? "Password is required" : $passwordInput.tooShort ? "Password must has 8 character" : $passwordInput.patternMismatch ? "Must contain at least one uppercase, lowercase, and number" : "Nice",
        showMessage: !$passwordInput.show,
        value: user.password
      },
      {
        value: ($$value) => {
          user.password = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div></div></div> <div class="">${validate_component(InputPassword, "InputPassword").$$render(
      $$result,
      {
        label: "Confirm Password",
        field: confirmPasswordInput,
        min: 8,
        max: 30,
        id: "password",
        required: true,
        placeholder: "Input your password",
        invalidText: $confirmPasswordInput.valueMissing ? "Password is required" : $confirmPasswordInput.tooShort ? "Password must has 8 character" : $confirmPasswordInput.patternMismatch ? "Must contain at least one uppercase, lowercase, and number" : passwordMatch() ? "Confirm password not match with password" : "",
        showMessage: !$confirmPasswordInput.show,
        value: confirmPasswordValue
      },
      {
        value: ($$value) => {
          confirmPasswordValue = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div></div></div></div> ${``} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        type: "submit",
        variant: "outline",
        title: "Login Button",
        size: "lg",
        disable: !$form.valid,
        classStyled: " w-full uppercase border-2 border-gray-500 mt-3"
      },
      {},
      {
        default: () => {
          return `Register`;
        }
      }
    )}</form></div>`;
  } while (!$$settled);
  $$unsubscribe_emailInput();
  $$unsubscribe_nameInput();
  $$unsubscribe_passwordInput();
  $$unsubscribe_confirmPasswordInput();
  $$unsubscribe_form();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DQ1QRGvY.js.map
