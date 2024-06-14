fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10')
    .then((response) => response.json())
    .then(response => reload(response))

const body = document.querySelector("body")
const story_block = document.querySelector(".story_block")

const stories = document.querySelector(".stories")
const suggestions_selected_user = document.querySelector(".main_user")

const other_users = document.querySelector(".other_users")

function reload(arr) {
    for(let item of arr) {

        const storys_div = document.createElement("div")

        const story = document.createElement("img")
        story.className = "story"
        story.src = item.url
        const story_border = document.createElement("div")
        story_border.classList.add("story_border")
        const nickname = document.createElement("p")
        nickname.classList.add("nickname")
        nickname.innerHTML = "nickname"


        
        story_border.append(story)
        storys_div.append(story_border, nickname)
        story_block.append(storys_div)
        
    }


    for(let elem of arr) {
        const storiesblock = document.createElement("div")
        storiesblock.classList.add("storiesblock")

        const username = document.createElement("div")
        username.classList.add("username")

        const user_about = document.createElement("div")
        user_about.classList.add("user_about")

        const user_avatar = document.createElement("img")
        user_avatar.className = "user_avatar"
        user_avatar.src = "img/Avatar.png"
        const username_city = document.createElement("div")
        const user_name = document.createElement("p")
        user_name.innerHTML = "nickname"
        const user_city = document.createElement("p")
        user_city.innerHTML = "City, Country"

        const options = document.createElement("img")
        options.src = "img/options.png"


        const story_content = document.createElement("img")
        story_content.className = "story_content"
        story_content.src = elem.url


        const likes_repost = document.createElement("div")
        likes_repost.classList.add("likes_repost")


        const reactions = document.createElement("div")
        reactions.classList.add("reactions")

        const like = document.createElement("img")
        like.src = "img/like.svg"
        const comment = document.createElement("img")
        comment.src = "img/comment.svg"
        const repost = document.createElement("img")
        repost.src = "img/repost.svg"

        const izbrannoe = document.createElement("img")
        izbrannoe.src = "img/izbrannoe.svg"


        const like_counts = document.createElement("p")
        like_counts.classList.add("like_counts")
        like_counts.innerHTML = "8,888 likes"


        const description = document.createElement("div")
        description.classList.add("description")
        

        const description_p = document.createElement("p")
        const more = document.createElement("p")
        more.classList.add("more")
        more.innerHTML = "more"
        description_p.innerHTML = `<b>nickname</b> nickname Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis... ${more.innerHTML}`

        const cm_count = 33
        const view_comments = document.createElement("p")
        view_comments.classList.add("view_comments")
        view_comments.innerHTML = `View all ${cm_count} coments`


        const comments = document.createElement("div")
        comments.classList.add("comments")
        let nickname_user = "nickname"
        let user_comment = "Lorem ipsum dolor sit amet"
        const cm_us = `${nickname_user} ${user_comment}`

        const cm_like = document.createElement("img")
        cm_like.src = "img/commentlike.svg"


       

        const input_comment = document.createElement("input")
        input_comment.classList.add("input_comment")
        input_comment.placeholder = "Add a comment..."
        

        comments.append(cm_us, cm_like)
        description.append(description_p)
        reactions.append(like, comment, repost)
        likes_repost.append(reactions, izbrannoe)
        username_city.append(user_name, user_city)
        user_about.append(user_avatar, username_city)
        username.append(user_about, options)
        storiesblock.append(username, story_content, likes_repost, like_counts, description, view_comments, comments, input_comment)
        stories.append(storiesblock)
    }

    const suggestion_user = document.createElement("div")
    suggestion_user.classList.add("suggestion_user")

    const suggest_about = document.createElement("div")
    suggest_about.classList.add("suggest_about")
    const suggest_avatar = document.createElement("img")
    suggest_avatar.className = "suggest_avatar"
    suggest_avatar.src = "img/Avatar.png"
    const name_surname = document.createElement("div")
    name_surname.classList.add("name_surname")
    const name = document.createElement("p")
    name.innerHTML = "name"
    const surname = document.createElement("p")
    surname.innerHTML = "surname"
    
    const switchBtn = document.createElement("p")
    switchBtn.classList.add("switchBtn")
    switchBtn.innerHTML = "Switch"


    const sugg_for_you = document.createElement("div")
    sugg_for_you.classList.add("sugg_for_you")
    const sugg = document.createElement("p")
    sugg.classList.add("sugg")
    sugg.innerHTML = "Suggestions For You"
    const see_all = document.createElement("p")
    see_all.classList.add("see_all")
    see_all.innerHTML = "See All"


    sugg_for_you.append(sugg, see_all)
    name_surname.append(name, surname)
    suggest_about.append(suggest_avatar, name_surname)
    suggestion_user.append(suggest_about, switchBtn)
    suggestions_selected_user.append(suggestion_user, sugg_for_you)



    for(let el of arr) {
        const user_sugg = document.createElement("div")
        user_sugg.classList.add("user_sugg")
        const sugg_about = document.createElement("div")
        sugg_about.classList.add("sugg_about")
        const useravatar = document.createElement("img")
        useravatar.className = "useravatar"
        useravatar.src = el.url
        const nickname_surname = document.createElement("div")
        const nick = document.createElement("p")
        nick.innerHTML = "nickname"
        const nick_sur = document.createElement("p")
        nick_sur.innerHTML = "name surname"

        const follow = document.createElement("p")
        follow.classList.add("follow")
        follow.innerHTML = "Follow"

        nickname_surname.append(nick, nick_sur)
        sugg_about.append(useravatar, nickname_surname)
        user_sugg.append(sugg_about, follow)
        other_users.append(user_sugg)
    }


}

