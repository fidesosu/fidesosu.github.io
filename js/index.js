document.addEventListener('DOMContentLoaded', () => {
            const explorerIcon = document.getElementById('explorer-icon');
            const explorerSidebar = document.getElementById('explorer-sidebar');
            const mainContent = document.getElementById('main-content');
            const activityItems = document.querySelectorAll('.activity-item');

            // Handle explorer sidebar toggle
            explorerIcon.addEventListener('click', () => {
                explorerSidebar.classList.toggle('open');
                mainContent.classList.toggle('sidebar-open');

                // On mobile, if explorer opens, ensure main content is pushed away or hidden
                if (window.innerWidth <= 600) {
                    if (explorerSidebar.classList.contains('open')) {
                        mainContent.style.display = 'none';
                    } else {
                        mainContent.style.display = 'block';
                    }
                }
            });

            // Set initial state based on screen size for explorer sidebar
            function initializeSidebarState() {
                if (window.innerWidth > 600) {
                    explorerSidebar.classList.add('open');
                    mainContent.classList.add('sidebar-open');
                } else {
                    explorerSidebar.classList.remove('open');
                    mainContent.classList.remove('sidebar-open');
                    mainContent.style.display = 'block'; // Ensure main content is visible by default on mobile
                }
            }

            // Collapse/expand sections in explorer sidebar
            const sectionHeaders = document.querySelectorAll('.section-header');
            sectionHeaders.forEach(header => {
                header.addEventListener('click', () => {
                    header.classList.toggle('collapsed');
                    const content = header.nextElementSibling;
                    if (content.style.maxHeight) {
                        content.style.maxHeight = null;
                    } else {
                        content.style.maxHeight = content.scrollHeight + "px";
                    }
                });
                // Initialize all sections as expanded for desktop view, collapsed for mobile
                const content = header.nextElementSibling;
                if (window.innerWidth <= 768) {
                    header.classList.add('collapsed');
                    content.style.maxHeight = '0';
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            });

            // Handle active state for activity bar icons (optional: could load different content)
            activityItems.forEach(item => {
                item.addEventListener('click', () => {
                    activityItems.forEach(i => i.classList.remove('active'));
                    item.classList.add('active');

                    // If explorer icon is clicked, ensure the sidebar opens
                    if (item.id === 'explorer-icon') {
                         explorerSidebar.classList.add('open');
                         mainContent.classList.add('sidebar-open');
                         if (window.innerWidth <= 600) {
                            mainContent.style.display = 'none';
                         }
                    } else {
                        // For other icons, close the explorer sidebar and reset main content margin
                        explorerSidebar.classList.remove('open');
                        mainContent.classList.remove('sidebar-open');
                        mainContent.style.display = 'block'; // Ensure main content is visible
                        mainContent.style.marginLeft = '50px'; // Reset margin
                    }
                });
            });

            // Adjust layout on window resize
            window.addEventListener('resize', () => {
                initializeSidebarState();
                // Re-calculate max-height for expanded sections on resize
                sectionHeaders.forEach(header => {
                    const content = header.nextElementSibling;
                    if (!header.classList.contains('collapsed')) {
                        content.style.maxHeight = 'none'; // Temporarily unset to get scrollHeight
                        content.style.maxHeight = content.scrollHeight + "px";
                    }
                });
                 // On mobile, if explorer is open, keep main content hidden
                if (window.innerWidth <= 600 && explorerSidebar.classList.contains('open')) {
                    mainContent.style.display = 'none';
                } else {
                    mainContent.style.display = 'block';
                }
            });

            // Initial call to set state
            initializeSidebarState();
        });