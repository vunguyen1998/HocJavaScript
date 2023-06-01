
// Hàm Validator
function Validator(options) {
    formElement = document.querySelector(options.form)

    // Hàm thực hiện validate
    function Validate (rule, inputElement, showMessage) {
        var errorMessage = rule.test(inputElement.value)
        var errorElement = inputElement.parentElement.querySelector(showMessage)
        
        if (errorMessage) {
            errorElement.innerText = errorMessage
            inputElement.parentElement.classList.add('invalid')
        } else {
            errorElement.innerText = ''
            inputElement.parentElement.classList.remove('invalid')
        }
    }
    
    if (formElement) {
        options.rules.forEach(function (rule) {
            var inputElement = formElement.querySelector(rule.selector)
            if (inputElement) {
                inputElement.onblur = function () {
                    Validate(rule, inputElement, options.showMessage)
                }
            }
        });
    }
}

// Định nghĩa các Rules
Validator.isRequired = function(selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : 'Vui lòng nhập trường này'
        }
    }
}

Validator.isEmail = function(selector) {
    return {
        selector: selector,
        test: function (value) {
            var res = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
            return res.test(value) ? undefined : 'Vui lòng nhập email'
        }
    }
}

Validator.isPassword = function(selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= 6 ? undefined : 'Mật khẩu ít nhất 6 ký tự'
        }
    }
}