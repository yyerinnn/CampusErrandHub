# Campus Errand Center Design Guidelines
## 캠퍼스 심부름 센터

### Design Approach: Reference-Based (Korean Gen Z Student Services)
**Inspiration Sources**: Toss (토스), Karrot Market (당근마켓), Baemin (배달의민족) - Known for their vibrant, friendly, student-accessible design language

**Core Principle**: Create a trustworthy yet playful experience that resonates with Korean university students while maintaining professionalism

---

## Color Palette

### Light Mode
- **Primary Brand**: 255 85% 65% (Vibrant coral/orange - energetic, approachable)
- **Primary Darker**: 255 75% 50% (For hover states)
- **Background**: 0 0% 100% (Clean white)
- **Surface**: 220 15% 97% (Soft gray for cards)
- **Text Primary**: 220 15% 20% (Deep charcoal)
- **Text Secondary**: 220 10% 45% (Medium gray)

### Dark Mode
- **Primary Brand**: 255 80% 60% (Slightly muted coral)
- **Background**: 220 18% 12% (Deep navy-gray)
- **Surface**: 220 15% 18% (Elevated cards)
- **Text Primary**: 0 0% 95% (Off-white)
- **Text Secondary**: 220 5% 65% (Light gray)

### Accent Colors
- **Success/Trust**: 142 70% 45% (Green for completed errands)
- **Alert/Urgent**: 15 85% 60% (Warm red for urgent requests)

---

## Typography

**Primary Font**: "Pretendard", -apple-system, "Noto Sans KR", sans-serif (Optimized for Korean + English)
**Secondary/Display**: "Pretendard", system-ui (For headings)

### Type Scale
- **Hero Headline**: text-5xl md:text-6xl, font-bold (Korean: 48-60px)
- **Section Headers**: text-3xl md:text-4xl, font-bold
- **Card Titles**: text-xl md:text-2xl, font-semibold
- **Body Text**: text-base md:text-lg (16-18px for readability)
- **Form Labels**: text-sm font-medium
- **Captions**: text-sm text-secondary

---

## Layout System

**Spacing Units**: Use Tailwind spacing of 4, 6, 8, 12, 16, 20 for consistency
- Form spacing: space-y-6
- Section padding: py-16 md:py-24
- Card padding: p-6 md:p-8
- Component gaps: gap-4, gap-6, gap-8

**Container Widths**:
- Hero section: max-w-6xl
- Form sections: max-w-3xl (focused, easy to complete)
- Content sections: max-w-7xl

---

## Component Library

### Hero Section
- **Layout**: Split layout - Left: compelling headline + CTA, Right: Hero illustration/image
- **Height**: min-h-[600px] md:min-h-[700px] (NOT 100vh)
- **Content**: Bold Korean headline emphasizing convenience, supporting text about campus life
- **Visual**: Bright illustration of students helping each other on campus or energetic photo

### Errand Request Form (심부름 신청 폼)
- **Style**: Clean card with rounded-2xl borders, shadow-lg
- **Fields**: Organized in logical groups with clear labels
- **Input Design**: 
  - Border: border-2 with focus:border-primary transition
  - Padding: px-4 py-3
  - Background: bg-surface in dark mode
  - Date/Time pickers: Native with custom styling
- **Submit Button**: Large, prominent, primary color with shadow
- **Success State**: Friendly confirmation message with animation

### Why Use Section (이용 이유)
- **Layout**: 2-3 columns on desktop (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- **Cards**: 
  - Icon at top (playful, relatable icons)
  - Short punchy headline
  - 1-2 sentence explanation in casual Korean
  - Light background with subtle hover lift effect
- **Tone**: Conversational, uses student slang appropriately (존댓말 but friendly)

### Advertiser Section (광고주 모집)
- **Position**: Bottom of landing page, clear visual separation
- **Style**: Slightly different background color (bg-surface)
- **Layout**: 2-column on desktop - Left: benefits explanation, Right: advertiser form
- **Form**: Simplified, professional but still approachable

### Admin Dashboard
- **Layout**: Sidebar navigation + main content area
- **Table Design**: 
  - Striped rows for readability (even:bg-surface)
  - Sticky header
  - Responsive cards on mobile
  - Clear status indicators (badges with color coding)
- **Authentication**: Simple centered login card

---

## Images

### Hero Image
- **Type**: Large, vibrant illustration or photo
- **Content**: Korean university students in campus setting, helping each other - conveys community and trust
- **Placement**: Right side of hero split layout, 50% width on desktop
- **Treatment**: Soft rounded corners (rounded-3xl), slight shadow

### Section Supporting Images (Optional)
- **Trust Section**: Small photos of happy students using the service
- **How It Works**: Simple iconography or illustrated steps

---

## Mobile-First Responsive Strategy

- **Hero**: Stack vertically on mobile, image below headline
- **Forms**: Single column, comfortable tap targets (min 44px height)
- **Grid Sections**: grid-cols-1 on mobile, expand on md/lg breakpoints
- **Navigation**: Hamburger menu on mobile, horizontal on desktop
- **Bottom padding**: pb-20 on mobile to avoid browser UI overlap

### Interaction Design
- **Form Validation**: Real-time, helpful error messages in Korean
- **Loading States**: Smooth skeleton loaders, not harsh spinners
- **Success Feedback**: Celebratory micro-animations (confetti or check mark)
- **Hover Effects**: Subtle scale/shadow lift on cards (transform scale-105)
- **Minimal Animations**: Only on submit success and card hovers

---

## Korean UX Considerations

- **Language**: Polite but casual Korean (반말/존댓말 balanced for Gen Z)
- **Cultural Touch**: Use familiar campus terminology (e.g., "학식" for cafeteria food)
- **Trust Elements**: Display safety guidelines, student verification badges
- **Community Feel**: Emphasize helping fellow students, campus community

**Key Message Tone Examples**:
- "바쁜 캠퍼스 생활, 이제 심부름 센터가 도와드릴게요!" (We'll help your busy campus life!)
- "믿을 수 있는 우리 학교 학우들이 함께합니다" (Trustworthy students from our school)