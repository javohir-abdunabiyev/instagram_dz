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

        const options = document.createElement("div")
        options.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z" fill="#262626"/>
                            <path d="M6.5 13.5C7.32843 13.5 8 12.8284 8 12C8 11.1716 7.32843 10.5 6.5 10.5C5.67157 10.5 5 11.1716 5 12C5 12.8284 5.67157 13.5 6.5 13.5Z" fill="#262626"/>
                            <path d="M17.5 13.5C18.3284 13.5 19 12.8284 19 12C19 11.1716 18.3284 10.5 17.5 10.5C16.6716 10.5 16 11.1716 16 12C16 12.8284 16.6716 13.5 17.5 13.5Z" fill="#262626"/>
                            </svg>
                            `


        const story_content = document.createElement("img")
        story_content.className = "story_content"
        story_content.src = item.url


        const likes_repost = document.createElement("div")
        likes_repost.classList.add("likes_repost")


        const reactions = document.createElement("div")
        reactions.classList.add("reactions")

        const like = document.createElement("div")
        like.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.3 3.05C20.15 3.05 22.5 5.65 22.5 8.8C22.5 12.2 19.55 14.3 16.75 16.8C13.95 19.3 12.5 20.65 12 20.95C11.45 20.6 9.65 18.95 7.25 16.8C4.4 14.3 1.5 12.2 1.5 8.8C1.5 5.65 3.85 3.05 6.7 3.05C8.8 3.05 9.95 4.05 10.75 5.2C11.7 6.5 11.85 7.15 12 7.15C12.15 7.15 12.3 6.5 13.25 5.2C14.05 4.05 15.2 3.05 17.3 3.05ZM17.3 1.55C15.05 1.55 13.35 2.45 12 4.35C10.65 2.5 8.95 1.6 6.7 1.6C3 1.55 0 4.8 0 8.8C0 12.45 2.7 14.8 5.3 17.05C5.6 17.3 5.95 17.6 6.25 17.9L7.4 18.9C9.6 20.85 10.7 21.85 11.2 22.15C11.45 22.3 11.75 22.4 12 22.4C12.3 22.4 12.55 22.3 12.8 22.15C13.3 21.85 14.2 21.05 16.7 18.75L17.7 17.85C18.05 17.55 18.35 17.25 18.7 17C21.35 14.8 24 12.5 24 8.8C24 4.8 21 1.55 17.3 1.55Z" fill="#262626"/>
                            </svg>
                         `
        const comment = document.createElement("div")
        comment.innerHTML = `
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_2_472)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M23.75 23.05L22.35 17.55C23.25 15.9 23.75 14 23.75 12C23.75 5.5 18.5 0.25 12 0.25C5.5 0.25 0.25 5.5 0.25 12C0.25 18.5 5.5 23.75 12 23.75C14 23.75 15.9 23.25 17.55 22.35L23.05 23.75C23.45 23.85 23.85 23.45 23.75 23.05ZM22.25 12C22.25 14 21.75 15.5 20.95 17C20.85 17.2 20.8 17.45 20.85 17.7L21.9 21.9L17.75 20.85C17.5 20.8 17.25 20.8 17.05 20.95C16.15 21.45 14.45 22.25 12.05 22.25C6.35 22.25 1.75 17.65 1.75 12C1.75 6.35 6.35 1.75 12 1.75C17.65 1.75 22.25 6.35 22.25 12Z" fill="#262626"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_2_472">
                                <rect width="24" height="24" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>
                            `
        const repost = document.createElement("div")
        repost.innerHTML = `
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_2_474)">
                                <path d="M23.9 1.9C23.75 1.65 23.5 1.5 23.25 1.5H0.75C0.45 1.55 0.15 1.75 0.05 2C-0.05 2.25 0 2.6 0.2 2.85L8.15 10.65L10.9 21.95C10.95 22.25 11.2 22.45 11.5 22.5H11.6C11.85 22.5 12.1 22.35 12.25 22.15L23.85 2.65C24.05 2.45 24.05 2.15 23.9 1.9ZM2.6 3.05H20.35L9 9.35L2.6 3.05ZM11.95 19.85L9.75 10.65L21.2 4.3L11.95 19.85Z" fill="#262626"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_2_474">
                                <rect width="24" height="24" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>
                            `

        const izbrannoe = document.createElement("div")
        izbrannoe.innerHTML = `
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_2_476)">
                                <path d="M21.75 24C21.55 24 21.35 23.9 21.2 23.8L12 14.5L2.8 23.8C2.6 24 2.25 24.1 2 23.95C1.7 23.85 1.5 23.55 1.5 23.25V0.75C1.5 0.35 1.85 0 2.25 0H21.75C22.15 0 22.5 0.35 22.5 0.75V23.25C22.5 23.55 22.3 23.85 22.05 23.95C21.95 24 21.85 24 21.75 24ZM12 13C12.4 13 12.8 13.15 13.1 13.45L21 21.45V1.5H3V21.45L10.9 13.45C11.2 13.15 11.6 13 12 13Z" fill="#262626"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_2_476">
                                <rect width="24" height="24" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>
                            `










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

        const user_profile_option = document.createElement("div")
        user_profile_option.innerHTML = `
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z" fill="#262626"/>
                                            <path d="M6.5 13.5C7.32843 13.5 8 12.8284 8 12C8 11.1716 7.32843 10.5 6.5 10.5C5.67157 10.5 5 11.1716 5 12C5 12.8284 5.67157 13.5 6.5 13.5Z" fill="#262626"/>
                                            <path d="M17.5 13.5C18.3284 13.5 19 12.8284 19 12C19 11.1716 18.3284 10.5 17.5 10.5C16.6716 10.5 16 11.1716 16 12C16 12.8284 16.6716 13.5 17.5 13.5Z" fill="#262626"/>
                                            </svg>
                                        `


        const comments_area = document.createElement("div")
        comments_area.classList.add("comments_area")




        const likes_repost_comment = document.createElement("div")
        likes_repost_comment.classList.add("likes_repost_comment")
        likes_repost_comment.classList.add("likes_repost")


        const reactions_comment = document.createElement("div")
        reactions_comment.classList.add("reactions")

        const like_comment = document.createElement("div")
        like_comment.innerHTML = `
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.3 3.05C20.15 3.05 22.5 5.65 22.5 8.8C22.5 12.2 19.55 14.3 16.75 16.8C13.95 19.3 12.5 20.65 12 20.95C11.45 20.6 9.65 18.95 7.25 16.8C4.4 14.3 1.5 12.2 1.5 8.8C1.5 5.65 3.85 3.05 6.7 3.05C8.8 3.05 9.95 4.05 10.75 5.2C11.7 6.5 11.85 7.15 12 7.15C12.15 7.15 12.3 6.5 13.25 5.2C14.05 4.05 15.2 3.05 17.3 3.05ZM17.3 1.55C15.05 1.55 13.35 2.45 12 4.35C10.65 2.5 8.95 1.6 6.7 1.6C3 1.55 0 4.8 0 8.8C0 12.45 2.7 14.8 5.3 17.05C5.6 17.3 5.95 17.6 6.25 17.9L7.4 18.9C9.6 20.85 10.7 21.85 11.2 22.15C11.45 22.3 11.75 22.4 12 22.4C12.3 22.4 12.55 22.3 12.8 22.15C13.3 21.85 14.2 21.05 16.7 18.75L17.7 17.85C18.05 17.55 18.35 17.25 18.7 17C21.35 14.8 24 12.5 24 8.8C24 4.8 21 1.55 17.3 1.55Z" fill="#262626"/>
                                    </svg>
                                `
        const comment_comment = document.createElement("div")
        comment_comment.innerHTML = `
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_2_472)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M23.75 23.05L22.35 17.55C23.25 15.9 23.75 14 23.75 12C23.75 5.5 18.5 0.25 12 0.25C5.5 0.25 0.25 5.5 0.25 12C0.25 18.5 5.5 23.75 12 23.75C14 23.75 15.9 23.25 17.55 22.35L23.05 23.75C23.45 23.85 23.85 23.45 23.75 23.05ZM22.25 12C22.25 14 21.75 15.5 20.95 17C20.85 17.2 20.8 17.45 20.85 17.7L21.9 21.9L17.75 20.85C17.5 20.8 17.25 20.8 17.05 20.95C16.15 21.45 14.45 22.25 12.05 22.25C6.35 22.25 1.75 17.65 1.75 12C1.75 6.35 6.35 1.75 12 1.75C17.65 1.75 22.25 6.35 22.25 12Z" fill="#262626"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_2_472">
                                        <rect width="24" height="24" fill="white"/>
                                        </clipPath>
                                        </defs>
                                        </svg>
                                    `
        const repost_comment = document.createElement("div")
        repost_comment.innerHTML = `
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_2_474)">
                                        <path d="M23.9 1.9C23.75 1.65 23.5 1.5 23.25 1.5H0.75C0.45 1.55 0.15 1.75 0.05 2C-0.05 2.25 0 2.6 0.2 2.85L8.15 10.65L10.9 21.95C10.95 22.25 11.2 22.45 11.5 22.5H11.6C11.85 22.5 12.1 22.35 12.25 22.15L23.85 2.65C24.05 2.45 24.05 2.15 23.9 1.9ZM2.6 3.05H20.35L9 9.35L2.6 3.05ZM11.95 19.85L9.75 10.65L21.2 4.3L11.95 19.85Z" fill="#262626"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_2_474">
                                        <rect width="24" height="24" fill="white"/>
                                        </clipPath>
                                        </defs>
                                        </svg>
                                    `

        const izbrannoe_comment = document.createElement("div")
        izbrannoe_comment.innerHTML = `
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_2_476)">
                                        <path d="M21.75 24C21.55 24 21.35 23.9 21.2 23.8L12 14.5L2.8 23.8C2.6 24 2.25 24.1 2 23.95C1.7 23.85 1.5 23.55 1.5 23.25V0.75C1.5 0.35 1.85 0 2.25 0H21.75C22.15 0 22.5 0.35 22.5 0.75V23.25C22.5 23.55 22.3 23.85 22.05 23.95C21.95 24 21.85 24 21.75 24ZM12 13C12.4 13 12.8 13.15 13.1 13.45L21 21.45V1.5H3V21.45L10.9 13.45C11.2 13.15 11.6 13 12 13Z" fill="#262626"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_2_476">
                                        <rect width="24" height="24" fill="white"/>
                                        </clipPath>
                                        </defs>
                                        </svg>
                                    `

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

        const cm_like = document.createElement("div")
        cm_like.innerHTML = `
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_2_480)">
                                <path d="M8.65 1.52499C10.075 1.52499 11.25 2.82499 11.25 4.39999C11.25 6.09999 9.775 7.14999 8.375 8.39999C6.975 9.64999 6.25 10.325 6 10.475C5.725 10.3 4.825 9.47499 3.625 8.39999C2.2 7.14999 0.75 6.09999 0.75 4.39999C0.75 2.82499 1.925 1.52499 3.35 1.52499C4.4 1.52499 4.975 2.02499 5.375 2.59999C5.85 3.24999 5.925 3.57499 6 3.57499C6.075 3.57499 6.15 3.24999 6.625 2.59999C7.025 2.02499 7.6 1.52499 8.65 1.52499ZM8.65 0.774994C7.525 0.774994 6.675 1.22499 6 2.17499C5.325 1.24999 4.475 0.799994 3.35 0.799994C1.5 0.774994 0 2.39999 0 4.39999C0 6.22499 1.35 7.39999 2.65 8.52499C2.8 8.64999 2.975 8.79999 3.125 8.94999L3.7 9.44999C4.8 10.425 5.35 10.925 5.6 11.075C5.725 11.15 5.875 11.2 6 11.2C6.15 11.2 6.275 11.15 6.4 11.075C6.65 10.925 7.1 10.525 8.35 9.37499L8.85 8.92499C9.025 8.77499 9.175 8.62499 9.35 8.49999C10.675 7.39999 12 6.24999 12 4.39999C12 2.39999 10.5 0.774994 8.65 0.774994Z" fill="#262626"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_2_480">
                                <rect width="12" height="12" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>
                            `


       
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