class Rule {
    constructor(name, errorText) {
        this.name = name;
        this.errorText = errorText;
    }

    isValid() {
    }
}


class RuleForName extends Rule {
    constructor(name, errorText) {
        super(name, errorText);
    }

    isValid() {
        let value = document.getElementsByName(this.name)[0].value;
        if (value.length >= 5 && value.length <= 15) {
            return true;
        } else {
            return false;
        }
    }
}
class RuleForYear extends Rule {
    constructor(name, errorText) {
        super(name, errorText);
    }

    isValid() {
        let value = document.getElementsByName(this.name)[0].value;
        if(+value >= 1900 && +value <= 2022) {
            return true;
        } else {
            return false;
        }
    }
}
class RuleForGrowth extends Rule {
    constructor(name, errorText) {
        super(name, errorText);
    }

    isValid() {
        let value = document.getElementsByName(this.name)[0].value;
        if (+value >= 0 && +value <= 2.60) {
            return true;
        } else {
            return false;
        }
    }
}
class RuleForWeight extends Rule {
    constructor(name, errorText) {
        super(name, errorText);
    }

    isValid() {
        let value = document.getElementsByName(this.name)[0].value;
        if (+value >= 0 && +value <= 300) {
            return true;
        } else {
            return false;
        }
    }
}


class Logger {
    log(errorText) {
        const errorSpan = document.getElementById('error');
        errorSpan.innerText = errorText;
    }
}

class Validator {
    constructor(logger, rules, form) {
        this.logger = logger.log;
        this.rules = rules;
        this.form = form;
    }

    validate(form) {
        const elements = form.elements;
        let bool = false;
        for (let el of elements) {
                if(el.tagName !== 'SELECT' && el.type !== 'submit'){
                    this.rules.forEach(rule=>{
                        if(el.name === rule.name){
                            if(rule.isValid() === true){
                                bool = true;
                            }
                            else{
                                this.logger(rule.errorText);
                                bool = false;
                            }
                        }
                    })
                }
        }
        return bool;
    }
}

class Processor{
    constructor(validator, success) {
        this.validator = validator;
        this.success =  success;
    }
    attach(formSelector){
        const form = document.getElementById(formSelector)
        form.addEventListener('submit', (e)=>{
            e.preventDefault();
            if(this.validator.validate(this.validator.form)){
                this.success();
            }
            else{
                console.log('NOT WORK')
            }
        })
    }
}

const success = () => {
    window.open('index1.html')
}

const form = document.getElementById('form');
const processor = new Processor(new Validator(new Logger(),
    [new RuleForName('name_user', 'Not correct name'),
        new RuleForYear('year_user', 'Not correct year'),
        new RuleForGrowth('growth_user', 'Not correct growth value'),
        new RuleForWeight('weight_user', 'Not correct weight value')], form), success)
processor.attach('form');






