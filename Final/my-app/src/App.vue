<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <STextInput v-model="formData.username" label="Username"></STextInput>
    <SEmailInput @emailChange="handleEmailChange"></SEmailInput>
    <SCard @click="handleCardClick">
      <template #title>
        <h2>Title goes here</h2>
      </template>
      <template #footer>
        <p>Additional information</p>
      </template>
    </SCard>
        <div class="group">
          <button>Default</button>
          <button disabled>Default</button>
        </div>
        <div class="group">
          <SButton>shynka</SButton>
          <SButton disabled>Disabled</SButton>
        </div>

        <div class="group">
          <SButton color="rebaccapurple" background="#fff" border-color="rebeccapurple" mouseover-background="rebeccapurple" mouseover-color="#111">shynka</SButton>
          <SButton color="rebaccapurple" background="#fff" border-color="rebeccapurple" mouseover-background="rebeccapurple" mouseover-color="#111">shynka</SButton>
        </div>
  
    <SCollapse>
      <template #header>
        <h3>Click to Toggle SCollapse</h3>
      </template>
      <div>
        <p>This is some content inside the Scollapse.</p>
      </div>
    </SCollapse>

    <SLabel text="Default Label" labelType="default" />
    <SLabel text="Success Label" labelType="success" />
    <SLabel text="Warning Label" labelType="warning" />
    <SLabel text="Error Label" labelType="error" />

    <SBadge text="Default Badge" badgeType="default" />
    <SBadge text="Primary Badge" badgeType="primary" />
    <SBadge text="Info Badge" badgeType="info" />
    <SBadge text="Success Badge" badgeType="success" />
    <SBadge text="Warning Badge" badgeType="warning" />
    <SBadge text="Danger Badge" badgeType="danger" />

    <SImage src="./assets/logo.png" alt="Example Image" width="300px" />

    <SSpin :loading="formData.isLoading" />

    <SCheckbox v-model="formData.isChecked" label="Check me" />
    <p>Checkbox is checked: {{ formData.isChecked }}</p>

    <SToggle></SToggle>

    <SSlider v-model="formData.sliderValue" label="Adjust Value" :min="0" :max="100" :step="5" />
    <p>Slider value: {{ formData.sliderValue }}</p>

    <SInputGroup v-model="formData.inputValue" label="Enter value:" placeholder="Type something">
      <SButton @click="submit">Submit</SButton>
    </SInputGroup>
    <p>Input value: {{ formData.inputValue }}</p>

    <SAccordion :items="accordionItems"></SAccordion>
  </div>
</template>

<script>
import SButton from './components/SButton.vue'
import STextInput from './components/STextInput.vue'
import SEmailInput from './components/SEmailInput.vue'
import SCard from './components/SCard.vue'
import SAccordion from './components/SAccordion.vue'
import SCollapse from './components/SCollapse.vue';
import SLabel from './components/SLabel.vue';
import SBadge from './components/SBadge.vue';
import SImage from './components/SImage.vue';
import SSpin from './components/SSpin.vue';
import SCheckbox from './components/SCheckbox.vue';
import SToggle from './components/SToggle.vue';
import SSlider from './components/SSlider.vue';
import SInputGroup from './components/SInputGroup.vue';

export default {
  components: {
    SButton,
    STextInput,
    SEmailInput,
    SCard,
    SAccordion,
    SCollapse,
    SLabel,
    SBadge,
    SImage,
    SSpin,
    SCheckbox,
    SToggle,
    SSlider,
    SInputGroup,
  },
  data() {
    return {
      formData: {
        username: "",
      },
        email: "",
        isLoading: true,
        isChecked: false,
        sliderValue: 50,
        inputValue: '',
      
      accordionItems: [
          { title: "Select 1", content: "Some little doesn't matter text" },
          { title: "Select 2", content: "Some tiny does not meaningful text" },
          { title: "Select 3", content: "You can not check this, it's working" },
      ],
    };
  },
  methods: {
    handleEmailChange(email) {
      this.formData.email = email;
    },
    handleCardClick() {
      console.log('Card clicked!');
    },
    submit() {
      alert('Submitted! Input value: ' + this.formData.inputValue);
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.group {
  margin: 10px;
}
</style>
