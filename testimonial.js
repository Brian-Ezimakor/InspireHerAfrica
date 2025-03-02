const testimonials = [
        {
        name: "- Esther Khadioli",
        image: "newesther.jpeg",
        testimony: "This program helped me focus my energy on my aspirations and turn them into reality. I developed my skills in sales and marketing, and with my mentor's guidance, I established my business, 'Khadiz Katering.' So far, I've gained over 15 clients for catering gigs. This space was filled with influential women, and I'm grateful for such a supportive and inspiring experience"
    },

    {
        name: "- Elizabeth Ananias",
        image: "elizabeth.jpg",
        testimony: "I learned a lot from this program and grew both personally and professionally. My mentor supported me not only with tasks but also in my overall development. Public speaking was a key goal for me, and by the end of the project, I achieved significant improvement. The project tasked pushed me out of my comfort zone, and I,m proud of executing it successfully. This program was an amazing experience, and I would gladly recommend it to others."
        
    },

    {
        name: "- Ibukunoluwa Oluotanmi",
        image: "ibuku.jpg",
        testimony: "My mentor played a vital role in ensuring I set goals and timelines and achieved them. Through this program, I've improved my  use of analytical tools, communications skills and adaptability, which are essential for career progression. The program also emphazied pesonal growth and provided tools and resource to achieve my goals. I'm sincerely grateful to the program team for this incredible opportunity"
    },

    {
        name: "- Uchenna Iheanacho",
        image: "uchenna.jpg",
        testimony: "This program has been a useful tool for my personal and professional development. I gained new skills, including resilience, time management, and certifications. My mentor provided consistent support and guidance, making the experience both motivating and fun. My key takeaway is that 'You are your brand'"
    },

    {
        name: "- Grace Dangasuk",
        image: "grace.jpg",
        testimony: "My mentor was keen on sharing additional resources that supported my personal research and growth. I gained networking, problem-solving, project management, time management, and communication skills. This program emphasized the importance of having a growth mindset, an element I'll carry with me. With its help, I was selected for the Mckinsey Forward Program. I am eager to pursue more opportunities to develop my professional abilities. My key takeaway is to embrace a growth mindset."
    },

    {
        name: "- Johanna Ngwali",
        image: "newjohhana.jpeg",
        testimony: "This program helped me discover what I'm passionate about, improve my interaction skills, and build a network. It has influenced my career goals and aspirations in a positive way."
    },

    {
        name: "- Jo'an Kambai",
        image: "jogirl.jpeg",
        testimony: "My Mentor guided me in securing  an internship and gave me valuable feedback on my statement of purpose. Through this program, I improved my time management and public speaking skills and gained clarity about my career aspirations"
    },

    {
        name: "- Susan Oyeribhor",
        image: "susan.jpg",
        testimony: "The past few in the IHA mentorship program have been incredibly enriching. I learned to apply structured problem-solving techniques and developed project management and communication skills, especially in presenting complex ideas effectively. The program reinforced my aspiration to work in my desired field and guided me toward opportunities with impact-driven results. It encourage me to pursue specializations in data-driven results."
    }

]

let i = 0;
let j = testimonials.length;

let testimonySpan = document.getElementById("testimony")
let img = document.getElementById("image")
let testiferName = document.getElementById("name") 
let prevBtn = document.getElementById("prev")
let nextBtn = document.getElementById("next")


document.addEventListener("click", e => {
    if (e.target.matches(".prev")) {
    i = (j + i - 1) % j;
    displayTestimony()
    }
})

document.addEventListener("click", e => {
    if (e.target.matches(".next")) {
    i = (j + i + 1) % j;
    displayTestimony()
    }
})


let displayTestimony = () => {
    document.getElementById("testimony").innerHTML = `${testimonials[i].testimony}`
    document.getElementById("image").src = `${testimonials[i].image}`
    document.getElementById("name").innerHTML = `${testimonials[i].name}`
}

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', displayTestimony)
} else {
    displayTestimony()
}


// window.onload = displayTestimony;

// onload = () => {
// displayTestimony()
// }

// document.addEventListener("load",  displayTestimony)


