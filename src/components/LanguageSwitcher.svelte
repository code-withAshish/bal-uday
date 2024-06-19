<script lang="ts">
  const locales = ["en", "hi"];
  const currentLocale = window.location.pathname.split("/")[1] || "en";
  import IndianFlag from "../assets/india-flag-icon.png";
  import UKFlag from "../assets/united-kingdom-flag-icon.png";

  const handleLanguageChange = (
    event: Event & {
      currentTarget: EventTarget & HTMLSelectElement;
    }
  ) => {
    const newLocale =
      (event.currentTarget as HTMLSelectElement).value === "en" ? "" : "hi";
    const newPath =
      newLocale === ""
        ? ''
        : `/${newLocale}`;
    window.location.pathname = newPath;
  };
</script>

<div class="flex flex-row items-center gap-4">
  {#if currentLocale === "hi"}
    <img src={IndianFlag.src} alt="Indian Flag" class="w-5 h-5" />
  {:else}
    <img src={UKFlag.src} alt="Uk Flag" class="w-5 h-5" />
  {/if}

  <select on:change={handleLanguageChange}>
    {#each locales as locale}
      <option value={locale} selected={locale === currentLocale}
        >{locale.toUpperCase()}</option
      >
    {/each}
  </select>
</div>
