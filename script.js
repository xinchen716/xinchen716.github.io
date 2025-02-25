document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('worksLink').addEventListener('click', function(event) {
        event.preventDefault();
        const message = document.getElementById('message');
        message.classList.remove('hidden');
        setTimeout(() => {
            message.classList.add('hidden');
        }, 1000);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const dots = document.querySelectorAll('.dot');
    const centerImage = document.getElementById('center-image');
    const displayedImage = document.getElementById('displayed-image');
    const displayedText = document.getElementById('displayed-text');

    dots.forEach(dot => {
        dot.addEventListener('mouseenter', function () {
            const imageUrl = this.getAttribute('data-image');
            const text = this.getAttribute('data-text');

            displayedImage.src = imageUrl;
            displayedText.textContent = text;

            centerImage.classList.add('active');
        });

        dot.addEventListener('mouseleave', function () {
            centerImage.classList.remove('active');
            displayedText.textContent = "";
        });
    });
});



document.addEventListener("DOMContentLoaded", () => {
    const blocks = document.querySelectorAll(".block");
    console.log("Blocks found:", blocks.length); 

    const observer = new IntersectionObserver(entries => {
        console.log("Observer triggered. Entries:", entries); 
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log("Element is intersecting:", entry.target); 
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, ootMargin: "0px 0px 100px 0px" });

    blocks.forEach((block, index) => {
        block.style.setProperty("--index", index);
        observer.observe(block);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const zomiaImage = document.querySelector('.zomiaimage');
    
    
    setTimeout(() => {
        zomiaImage.classList.add('show');
    }, 500); 
});

// 添加鼠标移动交互
document.addEventListener('DOMContentLoaded', function() {
    const circleBackground = document.querySelector('.circle-background');
    const circleLines = document.querySelector('.circle-lines');
    let timeout;

    // 鼠标移动时的处理
    document.addEventListener('mousemove', function(e) {
        // 清除之前的定时器
        clearTimeout(timeout);
        
        // 添加活跃状态
        circleBackground.classList.add('active');
        circleLines.classList.add('active');

        // 设置新的定时器，鼠标停止移动后恢复初始状态
        timeout = setTimeout(() => {
            circleBackground.classList.remove('active');
            circleLines.classList.remove('active');
        }, 1000); // 1秒后恢复
    });
});