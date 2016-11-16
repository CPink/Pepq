

Vue.component('quest2', {
    template: `
        <div class="panel panel-default">
                <div class="panel-heading">
                    <h4 class="panel-title">
                        <a data-toggle="collapse" href="#collapse2">Your Estate</a>
                    </h4>
                </div>
                <div id="collapse2" class="panel-collapse collapse">
                    <div class="panel-body">
                        <h4 class="panel-title text-center">
                            What would you estimate the total value of your estate to be?
                        </h4>
                        <br>
                        <ul class="list-group">
                            <li class="list-group-item checkbox"><input type="checkbox" value="">Less than $100,000</li>
                            <li class="list-group-item checkbox"><input type="checkbox" value="">Greater than $100,000 but less than $500,000</li>
                            <li class="list-group-item checkbox"><input type="checkbox" value="">Greater than $500,000 but less than $1,000,000</li>
                            <li class="list-group-item checkbox"><input type="checkbox" value="">Greater than $1,000,000 but less than $3,000,000</li>
                            <li class="list-group-item checkbox"><input type="checkbox" value="">Greater than $3,000,000 but less than $5,000,000</li>
                            <li class="list-group-item checkbox"><input type="checkbox" value="">Greater than $5,000,000</li>
                        </ul>
                        <div>
                            <button class="btn greenColor">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
    `
})

Vue.component('quest3', {
    template: `
        <div class="panel panel-default">
                <div class="panel-heading">
                    <h4 class="panel-title">
                        <a data-toggle="collapse" href="#collapse3">Your Marital status</a>
                    </h4>
                </div>
                <div id="collapse3" class="panel-collapse collapse">
                    <div class="panel-body">
                        <div class="panel-heading">
                            <h4 class="panel-title text-center">
                                Previously
                            </h4>
                        </div>
                        <ul class="list-group">
                            <li class="list-group-item checkbox"><input type="checkbox" value="">Married then divorced<input type="text" id="underLine">(Year of divorce)</li>
                            <li class="list-group-item checkbox"><input type="checkbox" value="">Married then widowed<input type="text" id="underLine">(Year of death)</li>
                        </ul>
                        <div class="panel-heading">
                            <h4 class="panel-title text-center">
                                Currently
                            </h4>
                        </div>
                        <ul class="list-group">
                            <li class="list-group-item checkbox"><input type="checkbox" value="">Single</li>
                            <li class="list-group-item checkbox"><input type="checkbox" value="">Married</li>
                            <li class="list-group-item checkbox"><input type="checkbox" value="">Co-habitating</li>
                            <li class="list-group-item checkbox"><input type="checkbox" value="">Married but seperated</li>
                        </ul>
                        <div class="form-group">
                            <textarea class="form-control" rows="5" id="comment" placeholder="Name of Spouse or Significant other:"></textarea>
                        </div>
                        <div>
                            <button class="btn greenColor" v-on:click="subS1">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
    `
})

Vue.component('quest4', {
    template: `
         <div class="panel panel-default">
                <div class="panel-heading">
                    <h4 class="panel-title">
                        <a data-toggle="collapse" href="#collapse4">Your Current Status</a>
                    </h4>
                </div>
                <div id="collapse4" class="panel-collapse collapse">
                    <div class="panel-body">
                        <ul class="list-group">
                            <li class="list-group-item checkbox"><input type="checkbox" value="" placeholder="Y"><input type="checkbox" value="" placeholder="N">Are you currently employed? If so, please describe:<input type="text" id="underLine"></li>
                            <li class="list-group-item checkbox"><input type="checkbox" value="" placeholder="Y"><input type="checkbox" value="" placeholder="N">If you are employed, are you participating in a retirement plan at work?</li>
                            <li class="list-group-item checkbox"><input type="checkbox" value="" placeholder="Y"><input type="checkbox" value="" placeholder="N">Are you currently experiancing any health issues that could shorten your life expectancy?</li>
                        </ul>
                        <div>
                            <button class="btn greenColor" v-on:click="subS1">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
    `
})


// Setup Firebase

var config = {
    apiKey: "ca9b0acc11c244ade83e7f02c5efd423e63334d7",
    authDomain: "estate-planning-cfefc.firebaseapp.com",
    databaseURL: "https://estate-planning-cfefc.firebaseio.com",
  };
  firebase.initializeApp(config);

var questRef = firebase.database().ref('questArray');

new Vue({
    el: '#pepq',

    firebase:{
        questArray: questRef
    },

    data: {
        s1q1: {
            ans: ''
        },

        s1q2: {
            ans: ''
        },

        s1q3: {
            ans: ''
        },

        s1q4: {
            ans: ''
        },

        s1q5: {
            ans: ''
        },

        s1q6: {
            ans: ''
        },
        check1: false,
        s1Questions: [],
        checkedS1: []
    },
    methods: {
            subS1: function () {
                this.s1Questions.push(this.s1q1);
                this.s1Questions.push(this.s1q2);
                this.s1Questions.push(this.s1q3);
                this.s1Questions.push(this.s1q4);
                this.s1Questions.push(this.s1q5);
                this.s1Questions.push(this.s1q6);
                this.checkedS1.push(this.check);
                questRef.push(this.s1Questions);
            },

            checked: function(){
                check1 = true;
            }
        }
})

new Vue({
    el: '#pepq2'
})

new Vue({
    el: '#pepq3'
})

 new Vue({
    el: '#pepq4'
})