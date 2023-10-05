function onFormSubmit(e) {
    e.preventDefault()
    const email = $("#inp_email")
    const  = $("#inp_subject")
    const message = $("#inp_message")

    if(!$(email).val()) {
        alert("Email is required")
    } else if (!$(subject).val()) {
        alert("Subject is required")
    } else if (!$(message).val()) {
        alert("Message is required")
    } else {
        alert("Form Submitted")
        $(email).val("")
        $(subject).val("")
        $(message).val("")
    }
}