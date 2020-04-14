const header = new Headers({
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*'
})

const url = new URL('https://sf-pyw.mosyag.in/sse/vote/stats')

const ES = new EventSource(url, header)

const progress1 = document.getElementById('progress1')
const progress2 = document.getElementById('progress2')
const progress3 = document.getElementById('progress3')
const progress4 = document.getElementById('progress4')

ES.onmessage = message => {
    votesObj = JSON.parse(message.data)
    all = votesObj.cats + votesObj.parrots + votesObj.dogs
    cats_per = votesObj.cats/all
    parrot_per = votesObj.parrots/all
    dogs_per = votesObj.dogs/all

    progress1.style.cssText = `width: ${cats_per*100}%`
    progress1.textContent = `${votesObj.cats}`

    progress2.style.cssText = `width: ${parrot_per*100}%`
    progress2.textContent = `${votesObj.parrots}`

    progress3.style.cssText = `width: ${dogs_per*100}%`
    progress3.textContent = `${votesObj.dogs}`

    progress4.style.cssText = `width: ${all}%`
    progress4.textContent = `${all}`
}
