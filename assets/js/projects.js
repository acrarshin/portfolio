$(document).ready(() => {
    render_projects('all');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/report.jpg',
            link: 'https://netrin.tech/repose.html',
            title: 'Repose - Lead Algorithm Developer',
            code: false,
            paper: false,
            technologies: ['Python'],
            description: "Lifestyle Assessment - Uses HRV analysis and IMU's to quantify Stress, Recovery, Activity and Sleep",
            categories: ['biosignal_a']
        },
        { 
            image: 'assets/images/OMNI.png',
            link: 'https://github.com/acrarshin/OMNI',
            title: 'OMNI',
            code: 'https://github.com/acrarshin/OMNI',
            paper: false,
            technologies: ['Pytorch'],
            description: "Open Source DL models for monitoring of neonate breathing and cardiac health along with a documented edge implementation guide",
            categories: ['dl', 'biosignal_a']
        },
        {
            image: 'assets/images/KD_MRI.png',
            link: 'https://github.com/Bala93/KD-MRI',
            title: 'KD-MRI',
            code: 'https://github.com/Bala93/KD-MRI',
            paper: 'https://openreview.net/forum?id=OrBdiT86_O',
            technologies: ['Pytorch', 'Scripting'],
            description: "A knowledge distillation framework for image reconstruction and image restoration in MRI workflow.",
            categories: ['publication', 'dl', 'medical_imaging']
        },
        {
            image: 'assets/images/RPNet.png',
            link: 'https://github.com/acrarshin/RPNet',
            title: 'RPNet',
            code: 'https://github.com/acrarshin/RPNet',
            paper: 'https://ieeexplore.ieee.org/abstract/document/9176084',
            technologies: ['Pytorch', 'Scripting'],
            description: "A Deep Learning approach for robust R Peak detection in noisy ECG",
            categories: ['publication', 'dl', 'biosignal_a']
        },
        {
            image: 'assets/images/spo2.png',
            link: 'https://arxiv.org/abs/2004.05399',
            title: 'Reflectance Pulse Oximetry',
            code: false, 
            paper: 'https://ieeexplore.ieee.org/document/9176410?denied=',
            technologies: ['Pytorch', 'Scripting'],
            description: "Robust Modelling of Reflectance Pulse Oximetry for SpO2 Estimation",
            categories: ['publication', 'biosignal_a']
        },
        {
            image: 'assets/images/vizualization.png',
            link: 'https://arxiv.org/abs/2004.05399',
            title: 'ECG-Gradcam',
            code: false,
            paper: 'https://ieeexplore.ieee.org/document/9176396',
            technologies: ['Pytorch', 'Scripting'],
            description: "Interpreting Deep Neural Networks for Single-Lead ECG Arrhythmia Classification",
            categories: ['publication', 'dl', 'biosignal_a']
        }
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
        
                        <p class="paragraph-text-normal">${project.description} ${project.code ? `<a href="${project.code}">[Code]</a>` : ''} ${project.paper ? `<a href="${project.paper}">[Paper]</a>` : ''}</p>
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
