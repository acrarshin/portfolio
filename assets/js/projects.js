$(document).ready(() => {
    render_projects('all');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/OMNI.png',
            link: 'https://github.com/acrarshin/OMNI',
            title: 'OMNI',
            demo: false,
            technologies: ['Pytorch'],
            description: "Open Source biosignal DL models for robust monitoring of neonate breathing and cardiac health along with a well documented edge implementation guide",
            categories: ['dl', 'biosignal_a']
        },
        {
            image: 'assets/images/RPNet.png',
            link: 'https://github.com/acrarshin/RPNet',
            title: 'RPNet',
            demo: 'https://arxiv.org/abs/2004.08103',
            technologies: ['Pytorch', 'Scripting'],
            description: "A Deep Learning approach for robust R Peak detection in noisy ECG",
            categories: ['publication', 'dl', 'biosignal_a']
        },
        {
            image: 'assets/images/KD_MRI.png',
            link: 'https://github.com/Bala93/KD-MRI',
            title: 'KD-MRI',
            demo: 'https://arxiv.org/abs/2004.05319',
            technologies: ['Pytorch', 'Scripting'],
            description: "A knowledge distillation framework for image reconstruction and image restoration in MRI workflow.",
            categories: ['publication', 'dl', 'medical_imaging']
        },
        {
            image: 'assets/images/vizualization.png',
            link: 'https://arxiv.org/abs/2004.05399',
            title: 'ECG-Gradcam',
            demo: 'https://arxiv.org/abs/2004.05399',
            technologies: ['Pytorch', 'Scripting'],
            description: "Interpreting Deep Neural Networks for Single-Lead ECG Arrhythmia Classification",
            categories: ['publication', 'dl', 'biosignal_a']
        },
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}
