fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10')
    .then((response) => response.json())
    .then(arr => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then(users => reload(arr, users))
    })


const body = document.querySelector("body")
const story_block = document.querySelector(".story_block")

const stories = document.querySelector(".stories")
const suggestions_selected_user = document.querySelector(".main_user")

const other_users = document.querySelector(".other_users")

function reload(arr, users) {
    for(let i = 0; i < arr.length; i++) {

        let item = arr[i]
        let user = users[i]


        const storys_div = document.createElement("div")
        const story = document.createElement("img")
        story.className = "story"
        story.src = item.url
        const story_border = document.createElement("div")
        story_border.classList.add("story_border")
        const nickname = document.createElement("p")
        nickname.classList.add("nickname")    
        nickname.innerHTML = user.username
        
        const modal = document.createElement("dialog")
        modal.classList.add("modal")

        const div_form = document.createElement("div")
        div_form.classList.add("div_form")
            const answer_form = document.createElement("form")
            answer_form.onsubmit = (e) => {
                e.preventDefault()

                form.reset()
            }
            const answer_user = document.createElement("input")
            answer_user.placeholder = `Ответьте ${user.username}`
            answer_user.classList.add("answer_user")

            const whitelike = document.createElement("img")
            whitelike.src = "img/likewhite.svg"
            const whiterepost = document.createElement("img")
            whiterepost.src = "img/repostwhite.svg"


            const profile_div = document.createElement("div")

            const line_div = document.createElement("div")
            line_div.classList.add("line_div")


            const pr_pause_div = document.createElement("div")
            pr_pause_div.classList.add("pr_pause_div")
            const profile_time = document.createElement("div")
            profile_time.classList.add("profile_time")
            const profile_img = document.createElement("img")
            profile_img.className = "profile_img"
            profile_img.src = item.url
            const profile_nickname = document.createElement("p")
            profile_nickname.innerHTML = user.username
            const timed = document.createElement("p")
            timed.innerHTML = "8 ч."

            const pause_div = document.createElement("div")
            pause_div.classList.add("pause_div")
            const pause_btn = document.createElement("div")
            pause_btn.classList.add("pause_btn")
            const option_img = document.createElement("img")
            option_img.src = "img/optionwhite.svg"


            const closeModal = document.createElement("button")
            closeModal.className = "closeModal"
            closeModal.innerHTML = "x"


            pause_div.append(pause_btn, option_img)
            profile_time.append(profile_img, profile_nickname, timed)
            pr_pause_div.append(profile_time, pause_div)
            profile_div.append(line_div, pr_pause_div)
            answer_form.append(answer_user)
            div_form.append(answer_form, whitelike, whiterepost)
            modal.append(div_form, profile_div, closeModal)

        story_border.ondblclick = () => {
            modal.style.backgroundImage = `url('${item.url}')`;
            modal.showModal()

            
        }

        closeModal.onclick = () => {
            modal.close()
        }


        story_border.append(story)
        storys_div.append(story_border, nickname)
        story_block.append(storys_div)
        body.append(modal)
        

        const storiesblock = document.createElement("div")
        storiesblock.classList.add("storiesblock")

        const username = document.createElement("div")
        username.classList.add("username")

        const user_about = document.createElement("div")
        user_about.classList.add("user_about")

        const user_avatar = document.createElement("img")
        user_avatar.className = "user_avatar"
        user_avatar.src = item.url
        user_avatar.classList.add("user_avatar")
        const username_city = document.createElement("div")
        const user_name = document.createElement("p")
        user_name.innerHTML = user.username
        const user_city = document.createElement("p")
        user_city.innerHTML = `${user.address.city}, ${user.address.street}`

        const options = document.createElement("img")
        options.src = "img/options.png"


        const story_content = document.createElement("img")
        story_content.className = "story_content"
        story_content.src = item.url


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










        const comment_modal = document.createElement("dialog")
        comment_modal.classList.add("comment_modal")

        const div_for_cmmodal = document.createElement("div")
        div_for_cmmodal.classList.add("div_for_cmmodal")
        const content_img = document.createElement("img")
        content_img.className = "content_img"
        content_img.src = item.url
        const comments_div = document.createElement("div")
        comments_div.classList.add("comments_div")

        const user_profile_avatar_name = document.createElement("div")
        user_profile_avatar_name.classList.add("user_profile_avatar_name")
        const user_profile_div = document.createElement("div")
        user_profile_div.classList.add("user_profile_div")
        const user_profile_div_avatar = document.createElement("img")
        user_profile_div_avatar.className = "user_profile_div_avatar"
        user_profile_div_avatar.src = item.url
        const user_profile_nickname = document.createElement("p")
        user_profile_nickname.innerHTML = "gigachad"

        const user_profile_option = document.createElement("img")
        user_profile_option.src = "img/options.png"


        const comments_area = document.createElement("div")
        comments_area.classList.add("comments_area")




        const likes_repost_comment = document.createElement("div")
        likes_repost_comment.classList.add("likes_repost_comment")
        likes_repost_comment.classList.add("likes_repost")


        const reactions_comment = document.createElement("div")
        reactions_comment.classList.add("reactions")

        const like_comment = document.createElement("img")
        like_comment.src = "img/like.svg"
        const comment_comment = document.createElement("img")
        comment_comment.src = "img/comment.svg"
        const repost_comment = document.createElement("img")
        repost_comment.src = "img/repost.svg"

        const izbrannoe_comment = document.createElement("img")
        izbrannoe_comment.src = "img/izbrannoe.svg"

        const likescount_comment = document.createElement("p")
        likescount_comment.innerHTML = "8,888 likes"
        likescount_comment.classList.add("like_counts")


        const comment_form = document.createElement("form")
        comment_form.classList.add("comment_form")

        const cm_input = document.createElement("input")
        cm_input.placeholder = "Add a comment"
        cm_input.classList.add("input_in_comment")


        const cm_input_button = document.createElement("button")
        cm_input_button.innerHTML = "Post"
        cm_input_button.classList.add("button")
        cm_input_button.disabled = true
        cm_input_button.classList.add("grey")


        cm_input.oninput = () => {
            if (cm_input.value.trim() === "") {
                cm_input_button.disabled = true
                cm_input_button.classList.add("grey")
            } else {
                cm_input_button.disabled = false
                cm_input_button.classList.remove("grey")
            }
        }
        
        comment_form.onsubmit = (e) => {
            e.preventDefault()



            const comment_div = document.createElement("div")
            comment_div.classList.add("comment_div")

            const second_div = document.createElement("div")
            second_div.classList.add("second_div")
            
            const useravatar_comment = document.createElement("img")
            useravatar_comment.className = "user_profile_div_avatar"
            useravatar_comment.src = "img/gigachad.webp"

            const username_comment = document.createElement("p")
            username_comment.innerHTML = `<b>${user.username}</b>`

            const user_comment_cm = document.createElement("p")
            user_comment_cm.classList.add("user_comment_cm")
            user_comment_cm.innerHTML = cm_input.value



            const comment_remove = document.createElement("button")
            comment_remove.classList.add("comment_remove")
            comment_remove.innerHTML = "x"
            comment_remove.onclick = () => {
                comment_div.remove()
            }


            comment_form.reset()
            cm_input_button.disabled = true
            cm_input_button.classList.add("grey")


            second_div.append(useravatar_comment, username_comment, user_comment_cm)
            comment_div.append(second_div, comment_remove)
            comments_area.append(comment_div)
        }

        


        comment.onclick = () => {
            comment_modal.showModal()
        }

        const closecommentmodal = document.createElement("button")
        closecommentmodal.classList.add("closecommentmodal")
        closecommentmodal.innerHTML = "x"


        closecommentmodal.onclick = () => {
            comment_modal.close()
        }


        comment_form.append(cm_input, cm_input_button)
        reactions_comment.append(like_comment, comment_comment, repost_comment)
        likes_repost_comment.append(reactions_comment, izbrannoe_comment)
        user_profile_div.append(user_profile_div_avatar, user_profile_nickname)
        user_profile_avatar_name.append(user_profile_div,user_profile_option)
        comments_div.append(user_profile_avatar_name, comments_area, likes_repost_comment, likescount_comment, comment_form)
        div_for_cmmodal.append(content_img, comments_div)
        comment_modal.append(div_for_cmmodal, closecommentmodal)
        body.append(comment_modal)


        const like_counts = document.createElement("p")
        like_counts.classList.add("like_counts")
        like_counts.innerHTML = "8,888 likes"


        const description = document.createElement("div")
        description.classList.add("description")
        

        const description_p = document.createElement("p")
        const more = document.createElement("p")
        more.classList.add("more")
        more.innerHTML = "more"
        description_p.innerHTML = `<b>${user.username}</b> ${item.title}`


        const view_comments = document.createElement("p")
        view_comments.classList.add("view_comments")
        view_comments.innerHTML = `View all coments`

        view_comments.onclick = () => {
            comment_modal.showModal()
        }



        const comments = document.createElement("div")
        comments.classList.add("comments")

        
        let nickname_user = "nickname"
        let user_comment = "Lorem ipsum dolor sit amet"
        const cm_us = `${nickname_user} ${user_comment}`

        const cm_like = document.createElement("img")
        cm_like.src = "img/commentlike.svg"


       
        const form = document.createElement("form")
        form.classList.add("form")
        const input_comment = document.createElement("input")
        input_comment.classList.add("input_comment")
        input_comment.placeholder = "Add a comment..."
        const submitBtn = document.createElement("button")
        submitBtn.classList.add("button")
        submitBtn.innerHTML = "Post"
        submitBtn.disabled = true
        submitBtn.classList.add("grey")


        input_comment.oninput = () => {
            if (input_comment.value.trim() === "") {
                submitBtn.disabled = true
                submitBtn.classList.add("grey")
            } else {
                submitBtn.disabled = false
                submitBtn.classList.remove("grey")
            }
        }
        
        form.onsubmit = (e) => {
            e.preventDefault()
            
            const comment_div = document.createElement("div")
            comment_div.classList.add("comment_div")

            const second_div = document.createElement("div")
            second_div.classList.add("second_div")
            
            const useravatar_comment = document.createElement("img")
            useravatar_comment.className = "user_profile_div_avatar"
            useravatar_comment.src = "img/gigachad.webp"

            const username_comment = document.createElement("p")
            username_comment.innerHTML = `<b>${user.username}</b>`

            const user_comment_cm = document.createElement("p")
            user_comment_cm.classList.add("user_comment_cm")
            user_comment_cm.innerHTML = input_comment.value



            const comment_remove = document.createElement("button")
            comment_remove.classList.add("comment_remove")
            comment_remove.innerHTML = "x"
            comment_remove.onclick = () => {
                comment_div.remove()
            }


            form.reset()
            submitBtn.disabled = true
            submitBtn.classList.add("grey")


            second_div.append(useravatar_comment, username_comment, user_comment_cm)
            comment_div.append(second_div, comment_remove)
            comments_area.append(comment_div)
        }



        form.append(input_comment, submitBtn)
        comments.append(cm_us, cm_like)
        description.append(description_p)
        reactions.append(like, comment, repost)
        likes_repost.append(reactions, izbrannoe)
        username_city.append(user_name, user_city)
        user_about.append(user_avatar, username_city)
        username.append(user_about, options)
        storiesblock.append(username, story_content, likes_repost, like_counts, description, view_comments, comments, form)
        stories.append(storiesblock)
        
    
    
        
    
    
    
            const user_sugg = document.createElement("div")
            user_sugg.classList.add("user_sugg")
            const sugg_about = document.createElement("div")
            sugg_about.classList.add("sugg_about")
            const useravatar = document.createElement("img")
            useravatar.className = "useravatar"
            useravatar.src = item.url
            const nickname_surname = document.createElement("div")
            const nick = document.createElement("p")
            nick.innerHTML = user.username
            const nick_sur = document.createElement("p")
            nick_sur.innerHTML = user.name
    
            const follow = document.createElement("p")
            follow.classList.add("follow")
            follow.innerHTML = "Follow"
    
            nickname_surname.append(nick, nick_sur)
            sugg_about.append(useravatar, nickname_surname)
            user_sugg.append(sugg_about, follow)
            other_users.append(user_sugg)

    }



        const suggestion_user = document.createElement("div")
        suggestion_user.classList.add("suggestion_user")
    
        const suggest_about = document.createElement("div")
        suggest_about.classList.add("suggest_about")
        const suggest_avatar = document.createElement("img")
        suggest_avatar.className = "suggest_avatar"
        suggest_avatar.src = "img/gigachad.webp"
        const name_surname = document.createElement("div")
        name_surname.classList.add("name_surname")
        const name = document.createElement("p")
        name.innerHTML = "gigachad"
        
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
        name_surname.append(name)
        suggest_about.append(suggest_avatar, name_surname)
        suggestion_user.append(suggest_about, switchBtn)
        suggestions_selected_user.append(suggestion_user, sugg_for_you)
}