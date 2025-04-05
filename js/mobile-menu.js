document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('.md\\:hidden');
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'md:hidden fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out translate-x-full';
    
    // Get current page path to determine correct relative paths
    const currentPath = window.location.pathname;
    const isInPages = currentPath.includes('/pages/');
    const basePath = isInPages ? '../' : '';
    
    mobileMenu.innerHTML = `
        <div class="p-4">
            <div class="flex justify-between items-center mb-4">
                <a href="${isInPages ? '../index.html' : 'index.html'}" class="flex items-center space-x-2">
                    <i class="fas fa-book-open text-2xl text-blue-600"></i>
                    <span class="text-xl font-bold text-gray-800">StudySync</span>
                </a>
                <button class="close-menu">
                    <i class="fas fa-times text-gray-600"></i>
                </button>
            </div>
            <div class="flex flex-col space-y-4">
                <a href="${isInPages ? '../index.html' : 'index.html'}" class="text-gray-600 hover:text-blue-600">Home</a>
                <a href="${basePath}pages/courses.html" class="text-gray-600 hover:text-blue-600">Courses</a>
                <a href="${basePath}pages/class-notes.html" class="text-gray-600 hover:text-blue-600">Class Notes</a>
                <a href="${basePath}pages/team.html" class="text-gray-600 hover:text-blue-600">Our Team</a>
            </div>
        </div>
    `;
    document.body.appendChild(mobileMenu);

    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.remove('translate-x-full');
    });

    mobileMenu.querySelector('.close-menu').addEventListener('click', function() {
        mobileMenu.classList.add('translate-x-full');
    });
}); 