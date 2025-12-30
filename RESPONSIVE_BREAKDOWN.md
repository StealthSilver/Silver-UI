# Responsive Design Breakdown

## Screen Size Breakpoints

```
┌─────────────────────────────────────────────────────────────────┐
│                    MOBILE-FIRST DESIGN                          │
└─────────────────────────────────────────────────────────────────┘

Mobile (< 640px)
├─ Hamburger Menu: ✓ Visible
├─ Navbar Height: 56px (h-14)
├─ Sidebar: Drawer (slides from left)
├─ Search Bar: Full-width below navbar
├─ Theme Dropdown: ✗ Hidden
├─ Padding: 16px (px-4)
└─ Main Content: Full width with padding

Tablet (640px - 768px)
├─ Hamburger Menu: ✓ Visible
├─ Navbar Height: 56px (h-14)
├─ Sidebar: Drawer with hamburger toggle
├─ Search Bar: Inline in navbar
├─ Theme Dropdown: ✗ Hidden
├─ Padding: 24px (sm:px-6)
└─ Main Content: Full width

Desktop Small (768px - 1024px)
├─ Hamburger Menu: ✗ Hidden (md:hidden)
├─ Navbar Height: 56px (h-14)
├─ Sidebar: Always visible (288px / w-72)
├─ Search Bar: Inline in navbar
├─ Theme Dropdown: ✗ Hidden
├─ Padding: 32px (md:px-8)
└─ Main Content: Flex with sidebar

Desktop Large (1024px+)
├─ Hamburger Menu: ✗ Hidden
├─ Navbar Height: 56px (h-14)
├─ Sidebar: Always visible (288px / w-72)
├─ Search Bar: Inline in navbar (max-w-xs)
├─ Theme Dropdown: ✓ Visible (lg:block)
├─ Padding: 24px (lg:px-6)
└─ Main Content: Flex with sidebar

```

## Component Layout Diagrams

### Mobile Layout (< 768px)

```
┌────────────────────────────────┐
│  🍔  Logo    Search [     ]   │◄─ Navbar (h-14)
├────────────────────────────────┤
│  Search [                    ] │◄─ Mobile search (sm:hidden)
├────────────────────────────────┤
│                                │
│  ┌──────────────┐              │
│  │              │              │
│  │ Components   │  ◄─ Sidebar  │
│  │ Drawer       │     (Drawer) │
│  │              │              │
│  └──────────────┤ Main Content │
│                │              │
│                │ Component    │
│                │ Preview      │
│                │              │
│                │              │
└────────────────────────────────┘

When sidebar is closed:
┌────────────────────────────────┐
│  🍔  Logo    [Search]         │
├────────────────────────────────┤
│ [Search Bar Full Width]        │
├────────────────────────────────┤
│                                │
│                                │
│     Main Content               │
│                                │
│     Component Preview          │
│                                │
│                                │
└────────────────────────────────┘

Overlay appears when sidebar opens
```

### Tablet Layout (768px - 1024px)

```
┌──────────────────────────────────────────┐
│ 🍔  Logo     Search [Search]  🔗 📱      │◄─ Navbar
├──────────────────────────────────────────┤
│ ┌──────────┐ ┌──────────────────────────┐│
│ │Components│ │                          ││
│ │ Drawer   │ │   Main Content           ││
│ │          │ │   Component Preview      ││
│ │          │ │                          ││
│ └──────────┘ │                          ││
│              │                          ││
│              └──────────────────────────┘│
│                                          │
│                                          │
└──────────────────────────────────────────┘

Sidebar visible as permanent drawer
Menu button still available for toggle
```

### Desktop Layout (1024px+)

```
┌────────────────────────────────────────────────────────────────┐
│ 🍔 Logo   Search [        ]   Theme ▼   🔗 📱                │◄─ Navbar
├────────────────────────────────────────────────────────────────┤
│ ┌─────────────────┐ ┌──────────────────────────────────────┐ │
│ │  Components     │ │                                      │ │
│ │  • Button       │ │   Main Content                       │ │
│ │  • Input        │ │   Component Preview                  │ │
│ │  • Card         │ │                                      │ │
│ │  • Switch       │ │                                      │ │
│ │  • Loader       │ │                                      │ │
│ │  • ...          │ │                                      │ │
│ │                 │ │                                      │ │
│ │  (scrollable)   │ │                                      │ │
│ │                 │ │                                      │ │
│ │  ─────────────  │ │                                      │ │
│ │  Tip: Use       │ │                                      │ │
│ │  search above   │ │                                      │ │
│ └─────────────────┘ └──────────────────────────────────────┘ │
│                                                                │
└────────────────────────────────────────────────────────────────┘

All features visible:
- Sidebar permanently visible (288px width)
- Theme switcher dropdown in navbar
- Full search functionality
- No hamburger menu needed
```

## CSS Classes Responsive Mapping

### Navbar

```
Logo width:      w-auto (responsive) | brightness-0 invert
Navbar height:   h-14 (56px) | always
Menu button:     md:hidden (visible on mobile)
Search input:    hidden sm:block | sm:hidden (mobile)
Gap between:     gap-2 sm:gap-3 | sm:gap-4 (desktop)
```

### Sidebar

```
Position:        fixed md:relative
Top offset:      top-14 md:top-auto
Width:           w-72 (consistent)
Height:          h-[calc(100vh-56px)] (mobile) | md:h-auto
Transform:       -translate-x-full md:translate-x-0
Padding:         p-4 sm:p-5
Close button:    md:hidden (mobile only)
Header:          hidden md:block (desktop only)
```

### Main Container

```
Max width:       max-w-7xl (always)
Borders:         border-l border-r (always)
Responsive gap:  gap-3 sm:gap-6 (deprecated in new nav)
Padding:         px-4 sm:px-6 md:px-8 lg:px-6
```

## Key Responsive Features

### 1. Hamburger Menu

- Triggers sidebar drawer on mobile
- Auto-rotates icon when sidebar open
- Only visible when viewport < 768px (md breakpoint)

### 2. Sidebar Drawer

- Slides in from left on mobile
- Fixed position with proper z-index (z-40)
- Closes automatically on route change
- Mobile overlay (z-30) prevents background scrolling

### 3. Search Bar

- Full-width below navbar on very small screens
- Inline in navbar on sm (640px) and up
- Maintains consistent styling across all sizes

### 4. Spacing Optimization

- Base: 16px padding (mobile)
- sm: 24px padding (tablets)
- md: 32px padding (small desktop)
- lg: 24px padding (large desktop)

### 5. Typography Scaling

- Icon sizes: h-4 w-4 (mobile) → h-5 w-5 (desktop)
- Text sizes: text-xs sm:text-sm (adaptive)
- Font weights maintained across sizes

## Testing Checklist

### Mobile (< 640px)

- [ ] Hamburger menu visible and functional
- [ ] Sidebar drawer slides in/out smoothly
- [ ] Mobile overlay appears when sidebar open
- [ ] Search bar is full-width and functional
- [ ] Theme dropdown is hidden
- [ ] No horizontal scrolling
- [ ] All buttons are at least 40px height
- [ ] Text is readable without zooming

### Tablet (640px - 768px)

- [ ] Hamburger menu visible
- [ ] Search bar inline with navbar
- [ ] Sidebar drawer still works
- [ ] Theme dropdown still hidden
- [ ] Responsive spacing is comfortable

### Desktop (768px+)

- [ ] Hamburger menu hidden
- [ ] Sidebar always visible
- [ ] Theme dropdown visible on 1024px+
- [ ] All features accessible
- [ ] Proper spacing and alignment

## Performance Notes

✓ CSS transforms used for animations (GPU accelerated)
✓ No forced reflows during transitions
✓ Mobile overlay doesn't cause layout shift
✓ Sidebar scroll doesn't affect main content
✓ All animations respect prefers-reduced-motion
