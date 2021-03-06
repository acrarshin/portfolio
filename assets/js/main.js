
$(document).ready(function() {
    general_utils();
    blog_posts();
})


function general_utils() {
    // smooth scrolling for nav links
    $('.head-menu-wrap a').smoothScroll();
    $('.extra-link a').smoothScroll();
    $('.profile-pic-link').smoothScroll();

    $('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width: $(this).attr('data-percent')
		}, 1000);
	});
}

function blog_posts() {

    // keeping it static, can be fetched from a blog dynamically as well
    let posts = [
        {
            url: 'https://compactml.wordpress.com/2020/08/31/article-2-on-the-intersection-of-human-computer-interaction-and-machine-learning/',
            title: 'On the intersection of HCI and ML',
        },
        {
            url: 'https://compactml.wordpress.com/2020/08/17/article-1-research-to-industry/',
            title: 'Research to Industry',
        },
        {
            url: 'https://compactml.wordpress.com/2020/08/17/example-post-2/',
            title: 'The How, When and Who',
        },
    ];

    let post_html = [];

    for(let post of posts) {

        let tags;
        
        if(post.tags) {
            tags = post.tags.map(tag => {
                return `<a href="https://www.nagekar.com/tags#${tag}">${tag}</a>`
            })
        }

        let post_template = `
        <div class="blog-post" onclick="blog_link_click('${post.url}');">

            <div class="blog-link">
    
                <h3><a href="${post.url}">${post.title}</a></h3>            

            </div>
    
            <div class="blog-goto-link">
                <img class="blog-arrow" src="/assets/images/right-open-mini.svg"/>
            </div>
        </div>
        `;

        post_html.push(post_template);
    }

  // for the more posts link
    let post_template = `
    <div class="blog-post more-blogs" onclick="blog_link_click('https://compactml.wordpress.com/blog/');">
        <div class="blog-link">
            <h3><a href="https://compactml.wordpress.com/blog/">Visit the blog for more posts</a></h3>            
        </div>
        <div class="blog-goto-link">
            <img class="blog-arrow" src="/assets/images/right-open-mini.svg"/>
        </div>
    </div>
    `;

    post_html.push(post_template);

    $('#rss-feeds').html(post_html);

}

function blog_link_click(url) {
    window.location = url;
}
