$(document).ready(function() {
    $('#btnheading').on('click', getHeading)
    $('#btnurl').on('click', getUrl)
    $('#btnmeals').on('click', randomMeals)
})

function getHeading() {
    let heading = $('#main-title').data('heading')
    $('#main-title').text(heading)

}

function getUrl() {
    let web = $('#hiddenurl').attr('url')
    $('#main-title').text(web)

}

function randomMeals() {
    let meals = ['', 'Pizza', 'Hamburger', 'Fried Chicken', 'Lasagna', 'Risotto', 'Omelette', 'Pancake', 'Apple Pie', 'Sphagetti']
    let random = Math.ceil(Math.random() * meals.length)
    let pick = meals[random]

    $('#hiddenmeals').attr('rel', pick)
    let newMeals = $('#hiddenmeals').attr('rel')
    $('#main-title').text(newMeals)
}
