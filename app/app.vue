<script setup lang="ts">
import Badge from "primevue/badge";
import Button from "primevue/button";
import Card from "primevue/card";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import Tab from "primevue/tab";
import TabList from "primevue/tablist";
import TabPanel from "primevue/tabpanel";
import TabPanels from "primevue/tabpanels";
import Tabs from "primevue/tabs";
import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";
import { computed, defineAsyncComponent, onMounted, ref, watch } from "vue";

const DataTable = defineAsyncComponent(() => import("primevue/datatable"));
const Column = defineAsyncComponent(() => import("primevue/column"));

const toast = import.meta.client ? useToast() : null;

const isDark = useState<boolean>("isDark", () => false);
const themeLabel = computed(() => (isDark.value ? "Dark" : "Light"));

function applyTheme(dark: boolean) {
  if (!import.meta.client) return;

  document.documentElement.classList.toggle("dark", dark);
  localStorage.setItem("theme", dark ? "dark" : "light");
}

watch(isDark, applyTheme, { immediate: true });

onMounted(() => {
  const stored = localStorage.getItem("theme");
  if (stored === "dark" || stored === "light") {
    isDark.value = stored === "dark";
    return;
  }

  isDark.value =
    window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
});

const features = [
  {
    title: "Nuxt 4",
    description: "Vue-powered app architecture with a fast dev/build pipeline.",
    icon: "logos:nuxt-icon",
  },
  {
    title: "PrimeVue",
    description:
      "A full UI component suite (unstyled) with Tailwind-driven styling.",
    icon: "solar:palette-round-bold",
  },
  {
    title: "Tailwind CSS v4",
    description:
      "Utility-first styling with a semantic token layer via CSS variables.",
    icon: "logos:tailwindcss-icon",
  },
  {
    title: "Supabase",
    description: "Database, Auth, Realtime, Storage and more when you need it.",
    icon: "logos:supabase-icon",
  },
  {
    title: "Pinia",
    description:
      "Type-safe state management when your app grows beyond local state.",
    icon: "logos:pinia",
  },
  {
    title: "Local Fonts",
    description: "Privacy-friendly local fonts loaded via @nuxt/fonts + CSS.",
    icon: "solar:text-bold",
  },
];

const semanticColors = [
  { name: "primary", label: "Primary" },
  { name: "secondary", label: "Secondary" },
  { name: "accent", label: "Accent" },
  { name: "neutral", label: "Neutral" },
  { name: "info", label: "Info" },
  { name: "success", label: "Success" },
  { name: "warning", label: "Warning" },
  { name: "error", label: "Error" },
];

type ToastSeverity = "success" | "info" | "warn" | "error";

function showToast(severity: ToastSeverity) {
  toast?.add({
    severity,
    summary: "PrimeVue Toast",
    detail: `This is a ${severity} message.`,
    life: 2500,
  });
}

const dialogVisible = ref(false);
const tabsValue = ref("0");

const fullName = ref("");
const email = ref("");

const people = ref([
  { id: 1, name: "Ada Lovelace", role: "Engineer", status: "Active" },
  { id: 2, name: "Grace Hopper", role: "Architect", status: "Active" },
  { id: 3, name: "Katherine Johnson", role: "Analyst", status: "On Hold" },
  { id: 4, name: "Alan Turing", role: "Researcher", status: "Inactive" },
]);

const baseButtonPt = "k-btn";
const buttonPtPrimary = { root: { class: `${baseButtonPt} k-btn-primary` } };
const buttonPtSecondary = {
  root: { class: `${baseButtonPt} k-btn-secondary` },
};
const buttonPtOutline = { root: { class: `${baseButtonPt} k-btn-outline` } };

const cardPt = {
  root: { class: "k-card" },
  body: { class: "p-6" },
  title: { class: "text-lg font-semibold text-[var(--color-text)]" },
  content: { class: "mt-2 text-sm text-[var(--color-text-muted)]" },
};

const inputPt = {
  root: { class: "k-input" },
};

const badgePt = {
  root: { class: "k-badge" },
};

const dialogPt = {
  mask: { class: "backdrop-blur-sm bg-black/30" },
  root: {
    class:
      "w-[min(92vw,36rem)] rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-xl",
  },
  header: {
    class:
      "flex items-center justify-between gap-4 border-b border-[var(--color-border)] px-6 py-4",
  },
  title: { class: "text-base font-semibold text-[var(--color-text)]" },
  content: { class: "px-6 py-5 text-sm text-[var(--color-text)]" },
  footer: { class: "border-t border-[var(--color-border)] px-6 py-4" },
};

const dataTablePt = {
  root: {
    class:
      "overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]",
  },
  tableContainer: { class: "overflow-auto" },
  table: {
    class: "w-full border-collapse text-left text-sm text-[var(--color-text)]",
  },
  thead: { class: "bg-[var(--color-surface-2)] text-[var(--color-text)]" },
  headerRow: { class: "border-b border-[var(--color-border)]" },
  tbody: { class: "divide-y divide-[var(--color-border)]" },
  bodyRow: { class: "hover:bg-[var(--color-surface-2)] transition-colors" },
};

const toastPt = {
  root: { class: "z-[9999]" },
  message: {
    class:
      "mb-3 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-lg",
  },
  messageContent: { class: "flex items-start gap-3 p-4" },
  summary: { class: "text-sm font-semibold text-[var(--color-text)]" },
  detail: { class: "text-sm text-[var(--color-text-muted)]" },
  closeButton: {
    class: "ml-auto rounded-lg p-2 hover:bg-[var(--color-surface-2)]",
  },
  closeIcon: { class: "pi pi-times text-sm text-[var(--color-text-muted)]" },
};
</script>

<template>
  <div class="min-h-screen bg-[var(--color-bg)] font-sans text-[var(--color-text)] selection:bg-[var(--color-primary)] selection:text-[var(--color-primary-foreground)]">
    <NuxtRouteAnnouncer />
    <ClientOnly>
      <Toast :pt="toastPt" />
    </ClientOnly>

    <header class="sticky top-0 z-40 border-b border-[var(--color-border)] bg-[var(--color-bg)]/80 backdrop-blur">
      <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div class="flex items-center gap-3">
          <div class="flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--color-primary)] text-[var(--color-primary-foreground)]">
            <Icon name="solar:bolt-bold" class="text-lg" />
          </div>
          <div class="leading-tight">
            <div class="font-display text-lg font-bold">
              Kira
            </div>
            <div class="text-xs text-[var(--color-text-muted)]">
              PrimeVue + Tailwind-only styling
            </div>
          </div>
        </div>

        <div class="flex items-center gap-2">
          <Button
            :pt="buttonPtOutline"
            :label="themeLabel"
            icon="pi pi-moon"
            icon-pos="left"
            @click="isDark = !isDark"
          />
          <a href="https://github.com" target="_blank" rel="noreferrer" class="k-btn k-btn-outline">
            <Icon name="logos:github-icon" class="text-lg" />
            <span class="hidden sm:inline">GitHub</span>
          </a>
          <Button :pt="buttonPtPrimary" label="Get Started" icon="pi pi-arrow-right" icon-pos="right" />
        </div>
      </div>
    </header>

    <main>
      <section class="relative overflow-hidden">
        <div class="pointer-events-none absolute inset-0">
          <div class="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[var(--color-primary)]/15 blur-3xl" />
          <div class="absolute -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-[var(--color-accent)]/15 blur-3xl" />
        </div>

        <div class="mx-auto max-w-6xl px-4 py-20 sm:py-24">
          <div class="mx-auto max-w-3xl text-center">
            <div class="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1">
              <Badge value="New" :pt="badgePt" />
              <span class="text-xs font-semibold text-[var(--color-text-muted)]">Nuxt 4-ready + PrimeVue (unstyled)</span>
            </div>

            <h1 class="font-display text-4xl font-bold leading-tight sm:text-6xl">
              Build faster with
              <span class="italic text-[var(--color-primary)]">PrimeVue</span>
              and Tailwind
            </h1>

            <p class="mt-6 text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg">
              The homepage is rebuilt with PrimeVue components and a semantic theme layer powered by Tailwind colors via CSS custom properties.
            </p>

            <div class="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Button :pt="buttonPtPrimary" label="Open Dialog" icon="pi pi-window-maximize" @click="dialogVisible = true" />
              <Button :pt="buttonPtOutline" label="Show Toast" icon="pi pi-bell" @click="showToast('info')" />
            </div>

            <div class="mt-12 flex flex-wrap justify-center gap-3">
              <span class="k-badge">Nuxt</span>
              <span class="k-badge">PrimeVue</span>
              <span class="k-badge">Tailwind v4</span>
              <span class="k-badge">Dark mode</span>
              <span class="k-badge">Unstyled components</span>
            </div>
          </div>
        </div>
      </section>

      <section class="mx-auto max-w-6xl px-4 pb-16">
        <div class="grid gap-6 md:grid-cols-3">
          <Card
            v-for="(feature, idx) in features"
            :key="idx"
            :pt="{
              ...cardPt,
              content: { class: 'mt-3 text-sm text-[var(--color-text-muted)]' },
            }"
          >
            <template #title>
              <div class="flex items-center gap-3">
                <div class="flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--color-surface-2)] text-[var(--color-primary)]">
                  <Icon :name="feature.icon" class="text-xl" />
                </div>
                <span>{{ feature.title }}</span>
              </div>
            </template>
            <template #content>
              {{ feature.description }}
            </template>
          </Card>
        </div>
      </section>

      <section class="mx-auto max-w-6xl px-4 pb-20">
        <div class="grid gap-8 lg:grid-cols-2">
          <Card :pt="cardPt">
            <template #title>
              Theme Tokens
            </template>
            <template #content>
              <div class="grid grid-cols-2 gap-3 sm:grid-cols-4">
                <div
                  v-for="c in semanticColors"
                  :key="c.name"
                  class="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-3"
                >
                  <div class="flex items-center justify-between gap-3">
                    <div class="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">
                      {{ c.label }}
                    </div>
                    <div :class="`h-4 w-4 rounded-full bg-[var(--color-${c.name})]`" />
                  </div>
                  <div class="mt-2 text-sm font-semibold text-[var(--color-text)]">
                    --color-{{ c.name }}
                  </div>
                </div>
              </div>
            </template>
          </Card>

          <Card :pt="cardPt">
            <template #title>
              Form (InputText)
            </template>
            <template #content>
              <div class="grid gap-4">
                <div>
                  <label class="mb-2 block text-sm font-semibold text-[var(--color-text)]" for="fullName">Full name</label>
                  <InputText id="fullName" v-model="fullName" placeholder="Jane Doe" :pt="inputPt" />
                </div>
                <div>
                  <label class="mb-2 block text-sm font-semibold text-[var(--color-text)]" for="email">Email</label>
                  <InputText id="email" v-model="email" placeholder="jane@example.com" :pt="inputPt" />
                </div>

                <div class="flex flex-wrap gap-2">
                  <Button :pt="buttonPtPrimary" label="Toast success" icon="pi pi-check" @click="showToast('success')" />
                  <Button :pt="buttonPtSecondary" label="Toast warn" icon="pi pi-exclamation-triangle" @click="showToast('warn')" />
                  <Button :pt="buttonPtOutline" label="Toast error" icon="pi pi-times" @click="showToast('error')" />
                </div>
              </div>
            </template>
          </Card>
        </div>
      </section>

      <section class="mx-auto max-w-6xl px-4 pb-20">
        <div class="grid gap-8 lg:grid-cols-2">
          <Card :pt="cardPt">
            <template #title>
              Tabs (PrimeVue replacement for TabView)
            </template>
            <template #content>
              <div class="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
                <div class="mb-3 flex gap-2">
                  <Button :pt="buttonPtOutline" label="1" class="!h-9 !w-9 !p-0" :outlined="tabsValue !== '0'" @click="tabsValue = '0'" />
                  <Button :pt="buttonPtOutline" label="2" class="!h-9 !w-9 !p-0" :outlined="tabsValue !== '1'" @click="tabsValue = '1'" />
                  <Button :pt="buttonPtOutline" label="3" class="!h-9 !w-9 !p-0" :outlined="tabsValue !== '2'" @click="tabsValue = '2'" />
                </div>

                <Tabs v-model:value="tabsValue">
                  <TabList class="flex flex-wrap gap-2">
                    <Tab value="0" class="k-btn k-btn-outline">
                      Overview
                    </Tab>
                    <Tab value="1" class="k-btn k-btn-outline">
                      Components
                    </Tab>
                    <Tab value="2" class="k-btn k-btn-outline">
                      Theme
                    </Tab>
                  </TabList>
                  <TabPanels class="mt-4">
                    <TabPanel value="0" class="text-sm text-[var(--color-text-muted)]">
                      Responsive layout uses Tailwind utilities; interactive pieces use Vue state.
                    </TabPanel>
                    <TabPanel value="1" class="text-sm text-[var(--color-text-muted)]">
                      This page showcases Button, Card, InputText, DataTable, Dialog, Toast, Tabs, and Badge.
                    </TabPanel>
                    <TabPanel value="2" class="text-sm text-[var(--color-text-muted)]">
                      Semantic colors map to Tailwind palettes via CSS variables and support dark mode.
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </div>
            </template>
          </Card>

          <Card :pt="cardPt">
            <template #title>
              DataTable (lazy-loaded)
            </template>
            <template #content>
              <DataTable :value="people" data-key="id" :pt="dataTablePt" class="w-full">
                <Column field="name" header="Name" />
                <Column field="role" header="Role" />
                <Column field="status" header="Status">
                  <template #body="{ data }">
                    <span class="k-badge">
                      {{ data.status }}
                    </span>
                  </template>
                </Column>
              </DataTable>
            </template>
          </Card>
        </div>
      </section>

      <section class="mx-auto max-w-6xl px-4 pb-24">
        <div class="k-card overflow-hidden">
          <div class="flex flex-col gap-2 border-b border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div class="text-sm font-semibold text-[var(--color-text)]">
                PrimeVue Component Demos
              </div>
              <div class="text-sm text-[var(--color-text-muted)]">
                Dialog and toast are interactive and maintain state without reload.
              </div>
            </div>
            <div class="flex flex-wrap gap-2">
              <Button :pt="buttonPtPrimary" label="Open Dialog" icon="pi pi-window-maximize" @click="dialogVisible = true" />
              <Button :pt="buttonPtOutline" label="Info Toast" icon="pi pi-info-circle" @click="showToast('info')" />
              <Button :pt="buttonPtSecondary" label="Success Toast" icon="pi pi-check" @click="showToast('success')" />
            </div>
          </div>

          <div class="grid gap-6 bg-[var(--color-bg)] p-6 sm:grid-cols-2 lg:grid-cols-4">
            <div class="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
              <div class="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">
                Badge
              </div>
              <div class="mt-3 flex items-center gap-2">
                <Badge value="v4" :pt="badgePt" />
                <span class="text-sm text-[var(--color-text-muted)]">PrimeVue</span>
              </div>
            </div>

            <div class="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
              <div class="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">
                InputText
              </div>
              <div class="mt-3">
                <InputText v-model="fullName" placeholder="Type something..." :pt="inputPt" />
              </div>
            </div>

            <div class="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
              <div class="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">
                Button
              </div>
              <div class="mt-3 flex flex-wrap gap-2">
                <Button :pt="buttonPtPrimary" label="Primary" />
                <Button :pt="buttonPtSecondary" label="Secondary" />
                <Button :pt="buttonPtOutline" label="Outline" />
              </div>
            </div>

            <div class="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
              <div class="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">
                Toast
              </div>
              <div class="mt-3">
                <Button :pt="buttonPtOutline" label="Trigger toast" icon="pi pi-bell" @click="showToast('info')" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <ClientOnly>
      <Dialog v-model:visible="dialogVisible" modal header="PrimeVue Dialog" :pt="dialogPt">
        <div class="grid gap-4">
          <div class="text-sm text-[var(--color-text-muted)]">
            This dialog is unstyled PrimeVue, themed with Tailwind-driven tokens.
          </div>

          <div class="grid gap-3">
            <div>
              <label class="mb-2 block text-sm font-semibold text-[var(--color-text)]" for="dialogName">Full name</label>
              <InputText id="dialogName" v-model="fullName" :pt="inputPt" />
            </div>
            <div>
              <label class="mb-2 block text-sm font-semibold text-[var(--color-text)]" for="dialogEmail">Email</label>
              <InputText id="dialogEmail" v-model="email" :pt="inputPt" />
            </div>
          </div>
        </div>

        <template #footer>
          <div class="flex justify-end gap-2">
            <Button :pt="buttonPtOutline" label="Close" icon="pi pi-times" @click="dialogVisible = false" />
            <Button :pt="buttonPtPrimary" label="Save" icon="pi pi-check" @click="showToast('success')" />
          </div>
        </template>
      </Dialog>
    </ClientOnly>

    <footer class="border-t border-[var(--color-border)] bg-[var(--color-bg)]">
      <div class="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div class="text-sm text-[var(--color-text-muted)]">
          © {{ new Date().getFullYear() }} Michael Nji
        </div>
        <div class="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
          <span class="k-badge">PrimeVue</span>
          <span class="k-badge">Tailwind</span>
          <span class="k-badge">Nuxt</span>
        </div>
      </div>
    </footer>
  </div>
</template>
