document.addEventListener('DOMContentLoaded', () => {
    const ub = document.querySelector(".userbag");
    const ubi = document.querySelector(".userbagInner");

    const scrollHandler = () => {
        const ubiRect = ub.getBoundingClientRect();
        const OFFSET_TOP = 120;
        const OFFSET_BOTTOM = ubiRect.height + 40;
        const scrollDiff = ub.scrollWidth - ubi.clientWidth;
        const wH = window.innerHeight;
        const getScrollK = () => (wH - (ubiRect.top + OFFSET_BOTTOM)) / (wH - (OFFSET_TOP + OFFSET_BOTTOM));
        let scrollK = getScrollK();

        if (scrollK < 0) {
            scrollK = 0;
        } else if (scrollK > 1) {
            scrollK = 1;
        }


        if (ub.scrollLeft - scrollDiff === 0) {
            window.removeEventListener('scroll', scrollHandler);
        }
        console.info(scrollK)

        ub.scrollLeft = scrollK * scrollDiff;
    };

    // stop handle scroll when interacted
    ub.addEventListener('mousedown', () => {
        window.removeEventListener('scroll', scrollHandler)
    }, {
        once: true
    });

    ub.addEventListener('touchstart', () => {
        window.removeEventListener('scroll', scrollHandler)
    }, {
        once: true
    });

    window.addEventListener("scroll", scrollHandler);
});
