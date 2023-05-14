<template>
  <div class="it-company">
    <main>
      <MainBanner
        sub-title="Modern, growing IT company"
        right-description="Let's create something together"
        left-description="Design Develop Support"
        image="it-company-back.webp"
        image-small="it-company-back.webp"
        href="#project"
        second-description="for Your Project"
        :anchor-scroll="true"
      />

      <div class="it-info">
        <div class="section_line">
          <p class="section_line__number">02</p>
        </div>
        <div class="types_room__title">
          <h2>
            WEB ■ DEVELOP ■ DESIGN ■ SERVICE ■ MARKETING ■ SERVICE ■ WEB ■
            DEVELOP ■ DESIGN ■ WEB ■ MARKETING ■ SERVICE ■ WEB ■ DEVELOP ■
            DESIGN ■ SERVICE ■ MARKETING ■ SERVICE ■ WEB ■ DEVELOP ■ DESIGN ■
            WEB ■ MARKETING ■ SERVICE
          </h2>
          <h2>
            SERVICE ■ MARKETING ■ DAY PASSES ■ DESIGN ■ DEVELOP ■ WEB ■
            MARKETING ■ DESIGN ■ DEVELOP ■ DESIGN ■ DEVELOP ■ SERVICE ■ SERVICE
            ■ MARKETING ■ MARKETING PASSES ■ DESIGN ■ DEVELOP ■ WEB ■ SERVICE ■
            DAY PASSES ■ DAY PASSES ■ DESIGN ■ DEVELOP ■ DESIGN ■
          </h2>
        </div>
        <div class="it-info__subtitle">
          We are a team of IT professionals with a strong background in the
          fintech industry. We design and develop technical solutions for
          corporations and private investors, as well as businesses and
          personal. We are creators of a technical infrastructure that will help
          drive your successful business.
        </div>
        <div class="row">
          <ItInfoBox
            color="#AACC99"
            title="Web"
            :services="[
              'Landing',
              'Websites',
              'eCommerce',
              'SaaS Platforms',
              'Online Services',
            ]"
          />
          <ItInfoBox
            color="#92E6E6"
            title="Develop"
            :services="[
              'Frontend',
              'Backend',
              'IOS Development',
              'Android Development',
              'Quality Assurance',
            ]"
          />
          <ItInfoBox
            color="#B0C0F8"
            title="Design"
            :services="[
              'Prototyping',
              'UI/UX',
              'Mobile Apps',
              'Logotypes',
              'Brand-style',
            ]"
          />
          <ItInfoBox
            color="#F3EFE6"
            title="Marketing"
            :services="[
              'Analysis & Sales',
              'Communication',
              'Logistics',
              'Fintech, Trading, Bidding',
              'Trading Simulation',
            ]"
          />
          <ItInfoBox
            color="#FFA2A2"
            title="Service"
            :services="['Servers settings', 'Consulting', 'Support']"
          />
        </div>
      </div>
      <div class="projects project-section">
        <div class="section_line">
          <p class="section_line__number">03</p>
        </div>
        <div class="projects-text-wrapper">
          <div>
            <h2 class="page-title">Our web design projects</h2>
          </div>
          <nuxt-link
            to="it-company/projects"
            class="features__block animation__arrow"
          >
            <span>DISCOVER all our projects</span>
            <Arrow />
          </nuxt-link>
        </div>

        <div class="row">
          <ProjectItem
            title="Vermont Beer Makers"
            image="beer.webp"
            color="#AACC99"
            description="One of the original 10 breweries in Vermont (Trout River), that has rebranded in order to stay relevant and has continued operations still to this day"
            href="https://vermontbeermakers.com/"
          />
          <ProjectItem
            title="Vermont Maple Syrup "
            image="syrop.png"
            color="#FFA2A2"
            description="Organic maple syrup farm with 18,000+ taps located in southern Vermont"
            href="https://vermontmaplesyrup.com/"
          />
          <ProjectItem
            title="NORM’S MARINA"
            image="norms.webp"
            color="#92E6E6"
            description="Full Service boat Marina in Hinsdale, NH – 80+ slips"
            href="https://normsmarina.com/"
          />
          <ProjectItem
            title="Viking Farms"
            image="vikings.webp"
            color="#B0C0F8"
            description="Independent craft beer and maple syrup distributor in Vermont"
            href="https://vikings.farm/"
          />
          <ProjectItem
            title="Belogour Properties"
            image="belogour.webp"
            color="#F3EFE6"
            description="Real estate projects with top-tier developers such as Emaar, Meraas, Dubai properties and Damac"
            href="https://belogour.com/"
          />
          <ProjectItem
            title="FC PIRIN"
            image="pirin.webp"
            color="#AACC99"
            description="OFC Pirin and youth football school of Blagoevgrad, Bulgaria"
            href="https://fcpirin.com"
          />
        </div>
      </div>

      <div class="operate">
        <div class="section_line">
          <p class="section_line__number">04</p>
        </div>
        <h2 class="page-title">How do we get started?</h2>
        <div class="operate-wrapper">
          <div class="row">
            <OperateService
              title="Web and development & testing"
              image="operate-web.svg"
              description="One of our dedicated managers will work with you directly. We sign a Non-Disclosure Agreement to keep all parties protected. We identify your project requirements and go over the plan meticulously to achieve maximum output. We provide an estimate and sign a development contract that benefits both parties, then our dedicated IT team is assigned to your project to bring your idea to life."
            />
            <OperateService
              title="Design"
              image="operate-design.svg"
              description="We will prepare a scheme and design a slick User Interface for your web project or application. Once you confirm the design, we move over to the development phase to create that special something you have been looking for."
            />
            <OperateService
              title="Support"
              image="operate-item.svg"
              description="Your website or application is now ready to be published on a live domain or server. The mobile application is now also ready to be deployed live on Google Play or Apple. Congratulations – you are live for the world to see!"
            />
          </div>
        </div>
      </div>
      <div id="project" class="project">
        <div class="section_line">
          <p class="section_line__number">05</p>
        </div>
        <h2 class="page-title project__title">Create your project with us</h2>
        <div class="project-wrapper">
          <div class="row column-reverse">
            <div class="col-12 col-xl-4">
              <div class="row">
                <SiteService
                  title="Website and/or mobile app"
                  description="If you need a website beyond a static page with your company’s contact information, professional web development services are the best choice. You can list all your requirements, features, and design ideas and let a team of experienced designers, software engineers, and quality assurance specialists take care of the rest."
                />
                <SiteService
                  title="CRM"
                  description="If your business requires software that runs your business online and connects with your customers, compliance, operational employees and company owners – a custom CRM development is the best choice. List all your requirements, features, and design ideas and let a team of experienced designers, software architects, software engineers and quality assurance specialists take care of the rest."
                />
                <SiteService
                  title="Design services"
                  description="Need a corporate style that is recognizable? How about a logo that attracts customers and retains who you are? For software or web design that looks superb, our designers are ready to help. Creativity and an individual approach are the values we obtain. Just list all your requirements and design ideas and let our team of experienced designers take care of the rest."
                />
              </div>
            </div>
            <div class="col-12 col-lg-11 col-xl-6 offset-xl-2">
              <div class="project-service">
                <div class="project-service__title">
                  Which Services Do You Need?
                </div>
                <div class="application tabs">
                  <ul>
                    <li
                      v-for="(tab, index) in applications"
                      :key="index"
                      class="application-box"
                      :class="{
                        'is-active': activeClassTab(tab),
                        'show-list': show === tab.id,
                      }"
                      @click.stop="() => pushService(tab)"
                    >
                      {{ tab.name }}
                      <svg
                        v-if="tab.checks"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="11"
                        viewBox="0 0 16 11"
                        fill="none"
                      >
                        <path
                          d="M14 2L8 8L2 2"
                          stroke="#000126"
                          stroke-width="3"
                        />
                      </svg>

                      <ul
                        v-if="tab.checks"
                        v-click-outside="onClickOutside"
                        class="application-select"
                      >
                        <li
                          v-for="(tab1, index) in currentService.checks"
                          :key="index"
                          @click.stop="() => pushService(tab1, true)"
                        >
                          {{ tab1.name }}
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div
                  v-if="selectedServices.length !== 0"
                  class="services-select"
                >
                  <span v-for="service in selectedServices" :key="service.id">
                    # {{ service.name }}
                  </span>
                  <div class="services-select__reset" @click="deleteService">
                    reset all
                    <svg
                      fill="none"
                      width="12px"
                      height="12px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.5 2L2 10.5"
                        stroke="#BB2929"
                        stroke-width="4"
                      />
                      <path
                        d="M2 2L10.5 10.5"
                        stroke="#BB2929"
                        stroke-width="4"
                      />
                    </svg>
                  </div>
                </div>
                <div class="project-order">
                  <template
                    v-if="
                      selectServiceTab &&
                      selectServiceTab.website &&
                      !selectedServices.find((x) => x.range === false)
                    "
                  >
                    <div class="project-order__start">
                      Your order starts from
                      <span>$ {{ selectServiceTab.min }}</span>
                    </div>
                    <div class="project-order__limit">
                      and You can set Budget Up to desired limit
                      <span>${{ form.sliderVal.value }}</span>
                    </div>
                    <input
                      v-model="form.sliderVal.value"
                      type="range"
                      :min="selectServiceTab.min"
                      :max="selectServiceTab.max"
                      class="range blue"
                      @change="changeRange"
                    />
                    <div class="project-order__description">
                      So that we have prepared an appropriate plan for you. It
                      should be a typical standard solution or whole custom
                      solution in human/hours. Where is our task to give you
                      maximum quality and not to get out of the budget.
                    </div>
                  </template>
                  <template
                    v-else-if="
                      selectedServices.find((x) => x.solution === true)
                    "
                  >
                    <div class="project-order__solution">
                      Individual solution – Please send us your ideas and our
                      personal project manager will get in touch with you do
                      discuss the details shortly.
                    </div>
                  </template>
                  <ValidationObserver
                    ref="ValidationObserver"
                    v-slot="validator"
                  >
                    <form
                      class="contact-us__form"
                      @submit.prevent="() => onSubmit(validator)"
                    >
                      <div class="contact-us__form-block">
                        <ValidationProvider
                          v-slot="{ errors, dirty }"
                          name="First Name"
                          :rules="`${
                            form.first_name.required ? 'required|' : ''
                          }|name|max:24`"
                        >
                          <div class="form-group input">
                            <input
                              v-model="form.first_name.value"
                              type="text"
                              class="input__field"
                            />
                            <span
                              class="input__label"
                              :class="{ 'input__label--active': dirty }"
                              >First Name<b v-if="form.first_name.required"></b
                            ></span>
                            <span class="input__error">{{ errors[0] }}</span>
                          </div>
                        </ValidationProvider>

                        <ValidationProvider
                          v-slot="{ errors, dirty }"
                          name="Last Name"
                          :rules="`${
                            form.last_name.required ? 'required|' : ''
                          }name|max:24`"
                        >
                          <div class="form-group input">
                            <input
                              v-model="form.last_name.value"
                              type="text"
                              class="input__field"
                            />
                            <span
                              class="input__label"
                              :class="{ 'input__label--active': dirty }"
                              >Last Name<b v-if="form.last_name.required"></b
                            ></span>
                            <span class="input__error">{{ errors[0] }}</span>
                          </div>
                        </ValidationProvider>
                      </div>

                      <ValidationProvider
                        v-slot="{ errors, dirty }"
                        name="Phone"
                        :rules="`${
                          form.phone.required ? 'required|' : ''
                        }phone`"
                      >
                        <div class="form-group input select-phone-code">
                          <input
                            v-model="form.phone.value"
                            type="text"
                            class="input__field"
                          />
                          <span
                            class="input__label"
                            :class="{ 'input__label--active': dirty }"
                            >Phone<b v-if="form.phone.required"></b
                          ></span>
                          <span class="input__error">{{ errors[0] }}</span>
                          <a-select
                            slot="addonBefore"
                            v-model="form.phone_code.value"
                            style="width: 80px"
                          >
                            <a-select-option value="+1"> +1 </a-select-option>
                          </a-select>
                        </div>
                      </ValidationProvider>

                      <ValidationProvider
                        v-slot="{ errors, dirty }"
                        name="Email"
                        :rules="`${
                          form.email.required ? 'required|' : ''
                        }email`"
                      >
                        <div class="form-group input">
                          <input
                            v-model="form.email.value"
                            type="text"
                            class="input__field"
                          />
                          <span
                            class="input__label"
                            :class="{ 'input__label--active': dirty }"
                            >Email<b v-if="form.email.required"></b
                          ></span>
                          <span class="input__error">{{ errors[0] }}</span>
                        </div>
                      </ValidationProvider>

                      <ValidationProvider
                        v-slot="{ errors, dirty }"
                        name="message"
                      >
                        <div class="form-group input">
                          <input
                            v-model="form.message.value"
                            type="text"
                            class="input__field"
                          />
                          <span
                            class="input__label"
                            :class="{ 'input__label--active': dirty }"
                            >Project Details<b v-if="form.message.required"></b
                          ></span>
                          <span class="input__error">{{ errors[0] }}</span>
                        </div>
                      </ValidationProvider>
                      <ValidationProvider
                        v-slot="{ errors }"
                        :rules="{ requiredAgree: { allowFalse: false } }"
                      >
                        <div class="input">
                          <a-checkbox v-model="agree" :checked="agree">
                            <p class="book-now__card-text">
                              I have read and agree to the website
                              <a href="/terms" target="_blank">
                                Terms And Conditions
                              </a>
                            </p>
                          </a-checkbox>
                          <span class="input__error">{{ errors[0] }}</span>
                        </div>
                      </ValidationProvider>
                      <button
                        class="contact-us__form-button"
                        type="submit"
                        :disabled="disableButton"
                      >
                        <span>send</span>
                        <Arrow :arrow-position="true" />
                      </button>
                    </form>
                  </ValidationObserver>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";
import { Checkbox, Select } from "ant-design-vue/lib";
import { mapActions } from "vuex";
import Arrow from "@/components/global/Arrow.vue";
import vClickOutside from "v-click-outside";
import MainBanner from "../../../components/mainPage/MainBanner";
import siteService from "../../../components/global/SiteService";
import ProjectItem from "../../../components/global/ProjectItem";
import OperateService from "../../../components/global/OperateService";
import ItInfoBox from "../../../components/global/ItInfoBox.vue";

export default {
  name: "ItCompany",
  components: {
    ItInfoBox,
    ProjectItem,
    OperateService,
    MainBanner,
    siteService,
    Arrow,
    ValidationProvider,
    ValidationObserver,
    "a-checkbox": Checkbox,
    "a-select": Select,
    "a-select-option": Select.Option,
  },
  directives: {
    clickOutside: vClickOutside.directive,
  },
  layout: "mainLayout",
  data: () => ({
    selectServiceTab: {},
    orderShowMin: 500,
    orderShowMax: 1000,
    activeItem: false,
    currentService: {},
    showSlider: true,
    selectedServices: [],
    disableButton: false,
    defaultForm: {},
    form: {
      first_name: {
        value: "",
        required: true,
      },
      last_name: {
        value: "",
        required: true,
      },
      email: {
        value: "",
        required: true,
      },
      phone: {
        value: "",
        required: true,
      },
      phone_code: {
        value: "+1",
        required: true,
      },
      message: {
        value: "",
        required: false,
      },
      postService: {
        value: [],
        required: false,
      },
      sliderVal: {
        value: "",
        required: false,
      },
    },
    agree: false,
    show: 0,
    showSub: 0,
    applications: [
      {
        name: "Website",
        color: "#AACC99",
        id: 1,
        range: true,
        checks: [
          {
            name: "Landing page",
            color: "#AACC99",
            id: 5,
            start: 600,
            min: 500,
            max: 1000,
            website: true,
            range: true,
          },
          {
            name: "Promo site",
            color: "#AACC99",
            id: 6,
            start: 1100,
            min: 1000,
            max: 2000,
            website: true,
            range: true,
          },
          {
            name: "Corporate site",
            color: "#AACC99",
            id: 7,
            start: 2100,
            min: 2000,
            max: 4000,
            website: true,
            range: true,
          },
          {
            name: "E-COmerce Site",
            color: "#AACC99",
            id: 8,
            start: 4100,
            min: 4000,
            max: 8000,
            range: true,
            website: true,
          },
          {
            name: "Individual site",
            color: "#AACC99",
            id: 9,
            range: false,
            solution: true,
          },
        ],
      },
      {
        name: "Mobile app",
        color: "#FFA2A2",
        id: 2,
        range: false,
        solution: true,
        checks: [
          {
            name: "iOs App",
            color: "#FFA2A2",
            id: 10,
            range: false,
            solution: true,
          },
          {
            name: "Android App",
            color: "#FFA2A2",
            id: 11,
            range: false,
            solution: true,
          },
          {
            name: "Full Pack of Apps",
            color: "#FFA2A2",
            id: 12,
            range: false,
            solution: true,
          },
        ],
      },
      {
        name: "CRM",
        color: "#F3EFE6",
        range: false,
        id: 3,
        solution: true,
      },
      {
        name: "Design services",
        color: "#B0C0F8",
        range: false,
        id: 4,
        solution: true,
      },
    ],
  }),
  mounted() {
    this.$recaptcha.init();
    this.$nuxt.$emit("title", "IT Company");
    this.defaultForm = JSON.parse(JSON.stringify(this.form));
  },

  methods: {
    onClickOutside(event) {
      this.currentService = {};
    },
    activeClassTab(tab) {
      const exitingSub = tab.checks?.find((i) =>
        this.selectedServices.includes(i)
      );
      return this.selectedServices.includes(tab) || exitingSub;
    },
    pushService(tab, isSub) {
      this.show = tab.id;
      let selectedServices = this.selectedServices;

      if (selectedServices.includes(tab)) {
        selectedServices = selectedServices.filter(
          (service) => service.id !== tab.id
        );
      } else if (tab.checks && !isSub) {
        if (this.currentService.id) {
          this.currentService = {};
        } else {
          this.currentService = tab;
        }
      } else if (isSub) {
        const currentApplication = this.applications.find(({ checks }) =>
          checks.includes(tab)
        );
        let exitingSub = false;

        if (currentApplication) {
          currentApplication?.checks.forEach((check) => {
            if (selectedServices.includes(check)) {
              exitingSub = true;
            }
          });
        }

        if (!exitingSub) {
          selectedServices.push(tab);
        } else {
          selectedServices = selectedServices.filter(
            (service) => !currentApplication?.checks.includes(service)
          );
          selectedServices.push(tab);
        }
        this.currentService = {};
      } else {
        selectedServices.push(tab);
        this.currentService = {};
      }
      this.selectedServices = selectedServices;
      this.selectServiceTab = this.selectedServices.find(
        (x) => x.range === true
      );
      if (this.selectServiceTab) {
        this.form.sliderVal.value = this.selectedServices.find(
          (x) => x.range === true
        ).start;
      }
    },
    deleteService() {
      this.currentService = {};
      this.selectServiceTab = {};
      this.selectedServices = [];
    },
    changeRange() {
      this.$emit("changeRange", this.form.sliderVal.value);
    },
    ...mapActions({
      postMessage: "postMessage",
    }),
    resetFields() {
      this.form = JSON.parse(JSON.stringify(this.defaultForm));
      this.agree = false;
      this.$refs.ValidationObserver.reset();
    },
    async onSubmit(validator) {
      this.form.postService.value = this.selectedServices
        .map((item) => item.name)
        .toString();

      if (!(await validator.validate())) {
        return;
      }
      this.disableButton = true;
      const res = await this.postMessage(this.form);

      if (res) {
        this.$notification.success({
          message: "Successfully",
          description: "Message sent successfully",
        });
        this.selectedServices = [];
        this.resetFields();
        setTimeout(() => {
          this.disableButton = false;
        }, 5000);
      }
    },
  },
};
</script>
