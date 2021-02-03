<template lang="html">
<div>
    <sui-form :error="backendError.status==true">
        <sui-form-field :error="checkControl.name=='error'" :success="checkControl.name=='success'">
            <sui-input placeholder="First Name" v-model="singleEntry.name" @change="checkValid" />
        </sui-form-field>
        <sui-form-field :error="checkControl.email=='error'" :success="checkControl.email=='success'">

            <sui-input placeholder="Email" v-model="singleEntry.email" type="email" @change="checkValid" />
        </sui-form-field>
        <sui-form-field :error="checkControl.conemail=='error'" :success="checkControl.conemail=='success'">

            <sui-input placeholder="Confirm Email" v-model="singleEntry.confirmEmail" type="email" @change="checkValid" />
        </sui-form-field>
        <sui-form-field>
            <sui-button basic color="blue" @click.prevent="submit" :disabled="checkValidation" class="buttonSend">Send</sui-button>
        </sui-form-field>
        <sui-message error>
            <p>
                {{backendError.text}} </p>
        </sui-message>
    </sui-form>
</div>
</template>

<script>
export default {
    name: 'assign-contract',
    props: ["singleEntry", "submit", "backendError"],
    data() {
        return {
            checkValidation: true,
            checkControl: {
                name: "normal",
                email: "normal",
                conemail: "normal"
            }
        };
    },
    methods: {
        checkValid() {
            console.log("check")
            if (this.singleEntry.name != "") {
                this.checkControl.name = "success";
            } else {
                this.checkControl.name = "error";
            }
            if (this.singleEntry.email != "" && this.validateEmail(this.singleEntry.email)) {
                this.checkControl.email = "success";
            } else {
                this.checkControl.email = "error";
            }
            if (this.singleEntry.confirmEmail == this.singleEntry.email && this.validateEmail(this.singleEntry.email)) {
                this.checkControl.conemail = "success";
                this.checkControl.email = "success";

            } else {
                this.checkControl.conemail = "error";
            }
            if (this.checkControl.name == "success" && this.checkControl.email == "success" && this.checkControl.conemail == "success") {
                this.checkValidation = false;
            } else {
                this.checkValidation = true;
            }
        },
        validateEmail(email) {
            var re = /\S+@\S+\.\S+/;
            return re.test(email);
        }

    }
};
</script>

<style scoped>
.buttonSend {
    margin-top:40px;
    width: 100%
}
</style>
