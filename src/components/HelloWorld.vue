<template>
<div class="hello">
    <div class="slogon">
        <div>A Better Way</div>
        <div>To enjoy everyday .</div>
        <div>
            <sui-button basic primary @click="onClick">request to invite</sui-button>
        </div>
    </div>
    <sui-dimmer :active="loading" inverted>
        <sui-loader content="Loading..." />
    </sui-dimmer>
    <sui-modal v-model="invitationControl.open">
        <sui-modal-header>{{invitationControl.text}}</sui-modal-header>
        <sui-modal-content class="content">

            <sui-modal-description v-show="invitationControl.successOrNot">
                <p>
                    You will be one of the first to experience Broccoli&Co. when we launch
                </p>
            </sui-modal-description>
            <sui-button class="okButton" basic color="blue" @click.prevent="toggle" v-show="invitationControl.successOrNot">ok</sui-button>
            <invitationForm :singleEntry="singleEntry" :submit="submitIt" v-show="!invitationControl.successOrNot" :backendError="backendError"></invitationForm>
        </sui-modal-content>
    </sui-modal>
</div>
</template>

<script>
import invitationForm from "./invitationForm"
import {
    sendInvitationApi
} from "@/api/invitationAPI"
export default {
    name: 'HelloWorld',
    components: {
        "invitationForm": invitationForm,
    },
    data() {
        return {
            msg: 'A better way to enjoy every day',
            invitationControl: {
                open: false,
                successOrNot: false,
                text: "Request a invitation"
            },
            loading: false,
            singleEntry: {},
            backendError: {
                status: false,
                text: ""
            }

        }
    },
    methods: {
        submitIt() {
            //this.invitationControl.open = false;
            this.loading = true;
            this.toggle();
            sendInvitationApi(this.singleEntry).then((result) => {
                this.invitationControl.open = true;
                this.loading = false;
                this.invitationControl.text = "All Done?"
                this.invitationControl.successOrNot = true;
            }).catch((result) => {
                this.invitationControl.open = true;
                this.loading = false;

                this.reset();
                this.backendError.status = true;
                this.backendError.text = result;
            })
        },
        toggle() {
            this.invitationControl.open = false;
        },
        onClick() {
            this.singleEntry = {}
            this.invitationControl.open = true;
            this.reset();
        },
        reset() {
            this.invitationControl.successOrNot = false;
            this.invitationControl.text = "Request a invitation"
            this.backendError = {
                status: false,
                text: ""
            }
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.slogon {
    font-size: xxx-large;
    margin-top: 20%;
    line-height: 60px;
}

.okButton {
    width: 100%;
    margin-top: 30px;
}

.content {
    margin: auto;
    padding: 40px;
    width: 300px !important;
}

h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}

.hello {
    height: 100%
}
</style>
