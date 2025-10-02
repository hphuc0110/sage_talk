import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogPost } from "@/components/blog/blog-post"
import { notFound } from "next/navigation"

const blogPosts = {
  "star-method": {
    title: "Cách để thuyết trình hay hơn bằng phương pháp Storytelling",
    content: `3C Credibility Framework – Xây dựng Uy Tín Trong Từng Lời Nói
Trong môi trường làm việc toàn cầu, khả năng truyền đạt ý tưởng bằng tiếng Anh một cách rõ ràng, thuyết phục và có trọng lượng không chỉ là kỹ năng ngôn ngữ – mà là một yếu tố quyết định vị thế lãnh đạo.
Tuy nhiên, không ít chuyên gia, dù sở hữu kinh nghiệm dày dặn, vẫn cảm thấy khó khăn khi bắt đầu một bài thuyết trình hoặc phát biểu trước công chúng. Không phải vì họ thiếu kiến thức, mà vì chưa có công cụ giúp họ thể hiện được uy tín một cách mạch lạc, đúng trọng tâm và đúng thời điểm.
Tại SageTalk English, chúng tôi giới thiệu 3C Credibility Framework – một mô hình đơn giản, tinh gọn, nhưng đặc biệt hiệu quả trong việc giúp người học xây dựng uy tín ngay từ những câu nói đầu tiên.
## 1.Competence – Năng lực: Uy tín trước hết đến từ khả năng chuyên môn, kinh nghiệm thực tiễn và thành tích rõ ràng. 
 2. Character – Nhân cách: Năng lực thôi là chưa đủ. Người nghe cần cảm thấy bạn là người đáng tin – trung thực, nhất quán và có nguyên tắc.
3. Caring – Sự quan tâm: Khi bạn cho thấy mình hiểu rõ ưu tiên, bối cảnh và nhu cầu của người nghe, hì thông điệp của bạn sẽ trở nên có sức nặng thực sự.
Khung 3C không yêu cầu người học phải học thuộc lòng mẫu câu hay kỹ thuật phức tạp.

Thay vào đó, nó giúp bạn định hình được cách lựa chọn thông tin, cách thể hiện bản thân, và cách điều chỉnh thông điệp sao cho phù hợp với người nghe – dù đó là nhà đầu tư, ban lãnh đạo, hay đối tác quốc tế.
Khi được luyện tập bài bản, khung 3C không còn là “công thức”, mà trở thành phong thái trình bày tự nhiên – giúp bạn nói điều đúng, theo cách đúng, vào thời điểm đúng.
Luyện tập để chuyển hóa – không chỉ học thêm thông tin
Tại SageTalk English, người học được thiết kế riêng toàn bộ nội dung theo chính tình huống công việc thật của họ. Không học lan man, không dàn trải.
 Chỉ trong 5 buổi huấn luyện chuyên sâu, bạn sẽ:
Rèn luyện chính bài thuyết trình, báo cáo, hoặc đối thoại mà mình cần
Áp dụng mô hình 3C để tăng độ tin cậy và sức ảnh hưởng trong từng câu nói
Nhận phản hồi cá nhân từ giáo viên có nền tảng ngôn ngữ và tư duy kinh doanh
Kết luận
Trong một thế giới nơi người nghe ngày càng chọn lọc, uy tín không đến từ việc nói nhiều – mà từ việc nói đúng và có trọng lượng.
Khung 3C là công cụ để bạn bắt đầu làm điều đó – và StageSpeak English là nơi giúp bạn rèn luyện điều đó một cách chuyên biệt, bài bản và sát thực tế.
Bạn đang chuẩn bị cho một bài thuyết trình chiến lược, một vòng pitching, hoặc buổi họp với đối tác quốc tế?
## Hãy để chúng tôi đồng hành cùng bạn, cá nhân hóa lộ trình huấn luyện để giúp từng lời nói của bạn thể hiện rõ uy tín, phong thái và năng lực lãnh đạo.
📩 Đăng ký tư vấn 1:1 và trải nghiệm buổi học thử miễn phí cùng đội ngũ StageSpeak English.
 Số lượng suất giới hạn trong tháng.
SAGETALK ENGLISH - TIẾNG ANH THUYẾT TRÌNH 
🎁 Inbox nhận ngay 1 buổi học thử miễn phí – chỉ còn 20 suất trong hôm nay
 📞 Hotline: 0325194889 
`,
    image: "/images/blog/star-method.webp",
    date: "2024-12-15",
    category: "Phỏng vấn",
    readTime: "5 phút đọc",
  },
  "experience-storytelling": {
    title: "Experience không chỉ hỏi quá khứ mà còn hỏi về cách bạn kể lại",
    content: `"Experience" không chỉ là quá khứ – mà là cách bạn kể lại hành trình trưởng thành của mình

## Khi câu hỏi "Hãy kể về kinh nghiệm làm việc của bạn" xuất hiện

Trong hầu hết các buổi phỏng vấn, nhà tuyển dụng sẽ hỏi: "Hãy kể về kinh nghiệm làm việc của bạn." Câu hỏi này tưởng chừng quen thuộc, nhưng lại là chiếc "bẫy" khiến nhiều ứng viên rơi vào lối mòn.

Thay vì biến đây thành cơ hội thể hiện bản thân, không ít người lại kể lại chức danh, trách nhiệm, mốc thời gian… y như đang đọc lại CV. Điều này khiến câu trả lời vừa khô khan, vừa thiếu điểm nhấn, và quan trọng hơn – không cho thấy sự trưởng thành trong tư duy và hành động.

Ở cấp độ chuyên nghiệp, nhà tuyển dụng không cần nghe lại những dòng chữ đã có trong hồ sơ. Họ muốn cảm nhận được:
- Bạn hiểu rõ vai trò của mình trong từng bối cảnh
- Bạn rút ra bài học từ mỗi trải nghiệm nghề nghiệp
- Và bạn truyền tải được sự trưởng thành của bản thân qua cách kể chuyện

## "Experience" không chỉ là số năm

Nhiều người nghĩ rằng kinh nghiệm được đo bằng số năm làm việc. Nhưng thực tế, kinh nghiệm được đo bằng cách bạn biến trải nghiệm thành giá trị. Một ứng viên có 3 năm nhưng biết kể chuyện nghề nghiệp bằng chiều sâu chiến lược đôi khi thuyết phục hơn hẳn người có 10 năm nhưng chỉ liệt kê đầu việc.

Chìa khóa nằm ở cách kể chuyện: bạn chọn chi tiết nào để kể, bạn rút ra thông điệp gì, và bạn truyền tải ra sao.

## Khung thực hành tại MasterTalk: Nhìn lại – Lọc chọn – Truyền tải

Tại buổi học chuyên đề "Experience" cùng MasterTalk, học viên không chỉ học cách nói về quá khứ, mà còn học cách xây dựng một câu chuyện nghề nghiệp chiến lược. Quá trình này gồm ba bước:

### 1. Nhìn lại hành trình nghề nghiệp bằng tư duy chiến lược

Bạn sẽ phân tích sự nghiệp của mình như một bản đồ, từ những khởi đầu nhỏ đến các mốc trưởng thành quan trọng.

Thay vì kể dàn trải, bạn học cách chọn ra 2–3 giai đoạn tiêu biểu, gắn liền với thách thức cụ thể và kết quả rõ ràng.

### 2. Diễn đạt bằng ngôn ngữ chuyên nghiệp, súc tích và sâu sắc

Thay cho lối nói "Tôi từng phụ trách A, làm việc tại B", bạn sẽ học cách nói:
"I spearheaded a cross-functional project that reduced costs by 15% and improved workflow efficiency."

Mỗi câu chữ không chỉ mô tả, mà còn thuyết phục người nghe về năng lực thật sự.

### 3. Truyền tải bằng phong thái, giọng nói và biểu cảm

Nội dung tốt cần đi kèm cách trình bày thuyết phục.

Bạn sẽ được luyện tập cách điều chỉnh giọng, ánh mắt, ngôn ngữ cơ thể – để câu chuyện vừa tự nhiên vừa cuốn hút.

Mục tiêu không phải là phô trương, mà là thể hiện sự tự tin vừa đủ để người nghe tin rằng bạn phù hợp.

## Vì sao storytelling nghề nghiệp lại quan trọng?

Một câu chuyện nghề nghiệp được kể đúng cách có thể thay đổi toàn bộ ấn tượng trong 5 phút đầu tiên của buổi phỏng vấn. Khi bạn biết kể chuyện, bạn sẽ:
- Biến kinh nghiệm khô khan thành minh chứng sống động
- Truyền cảm hứng cho người nghe về hành trình trưởng thành của chính mình
- Khẳng định giá trị không chỉ bằng kết quả, mà còn bằng tư duy và cách bạn học hỏi từ trải nghiệm

Nói cách khác, storytelling nghề nghiệp không phải để "khoe", mà để xác lập giá trị bản thân – với chính bạn, với nhà tuyển dụng, và với bất kỳ ai đang lắng nghe.

## Kết luận

"Experience" không chỉ là những gì đã xảy ra, mà là cách bạn kể lại hành trình trưởng thành để khẳng định giá trị của mình. Hãy nhớ: nhà tuyển dụng không cần nghe lại hồ sơ, họ muốn nghe câu chuyện. Và nếu bạn biết cách kể, câu chuyện ấy có thể trở thành chiếc chìa khóa thay đổi toàn bộ ấn tượng phỏng vấn.`,
    image: "/images/blog/experience-storytelling.webp",
    date: "2024-12-12",
    category: "Kỹ năng giao tiếp",
    readTime: "6 phút đọc",
  },
  "tell-me-about-yourself": {
    title: "Tell me about yourself - Câu hỏi tưởng dễ mà khó",
    content: `## Vì sao nhà tuyển dụng luôn hỏi câu này?

Trong hầu hết các buổi phỏng vấn bằng tiếng Anh, câu hỏi "Tell me about yourself" gần như là "nghi thức mở màn". Nghe thì đơn giản, nhưng thực tế lại khiến nhiều ứng viên loay hoay. Có người kể quá dài, đi từ quê quán đến sở thích cá nhân. Có người lại quá ngắn, chỉ nhắc tên, tuổi, và công ty hiện tại. Kết quả: câu trả lời không đủ trọng tâm và không tạo được ấn tượng.

Nhà tuyển dụng đặt câu hỏi này không phải để nghe bạn "đọc lại CV". Họ muốn kiểm tra ba yếu tố:
- Bạn có biết chọn lọc thông tin quan trọng không
- Bạn có khả năng giao tiếp mạch lạc, tự tin không
- Bạn có biết liên kết kinh nghiệm của mình với vị trí ứng tuyển không

Nói cách khác, câu trả lời này là cơ hội để bạn định vị bản thân ngay từ những phút đầu tiên.

## Chiến lược "hỏi lại" – Khôn ngoan và lịch sự

Ít ứng viên biết rằng bạn hoàn toàn có thể hỏi lại nhà tuyển dụng để làm rõ kỳ vọng của họ trước khi trả lời. Đây là một kỹ năng giao tiếp thông minh, vừa giúp bạn "câu" thêm vài giây bình tĩnh, vừa đảm bảo câu trả lời đi đúng trọng tâm.

Một số cách hỏi khéo léo, lịch sự:
- "Would you like me to focus on my work experience or something else in particular?"
- "Could you clarify what kind of information would be most helpful for you?"

Những câu hỏi này mang lại ba lợi ích:
- Giúp bạn kiểm soát nhịp độ cuộc trò chuyện
- Cho thấy bạn là người tôn trọng nhu cầu của người nghe
- Tránh rơi vào tình huống kể lan man, thiếu liên kết với công việc

## Nên và không nên khi trả lời

Điều quan trọng nhất là bạn phải biết mình nên nhấn mạnh điều gì và tránh điều gì.

❌ **Không nên**: kể dài dòng về đời sống cá nhân, sở thích, tôn giáo hay chi tiết riêng tư không liên quan. Ví dụ: "I like traveling, cooking, and reading novels…" – nhà tuyển dụng sẽ không thấy liên quan đến vị trí.

✅ **Nên**: tập trung vào ba yếu tố chính – kinh nghiệm làm việc, kỹ năng đã rèn luyện, và giá trị bạn có thể mang lại cho công ty. Ví dụ:
"I have five years of experience in marketing, specializing in digital campaigns. I've successfully managed projects that increased engagement rates by 30%, and I'm excited to bring this expertise to contribute to your brand growth."

Một câu trả lời như vậy vừa súc tích, vừa chuyên nghiệp, lại cho thấy bạn biết định hướng giá trị bản thân.

## Cấu trúc gợi ý để trả lời "Tell me about yourself"

Để tránh bị cuốn theo cảm tính, bạn có thể áp dụng một khung trả lời logic và dễ nhớ:

### Present (Hiện tại)
Giới thiệu nhanh về vị trí hoặc công việc bạn đang đảm nhiệm.
Ví dụ: "I am currently a project manager at ABC Company, focusing on digital transformation initiatives."

### Past (Quá khứ)
Nhắc đến 1–2 kinh nghiệm hoặc thành tích tiêu biểu liên quan đến công việc.
Ví dụ: "Before that, I worked at XYZ, where I led a cross-functional team that launched a new product line generating $2M in revenue."

### Future (Tương lai)
Kết nối với mục tiêu nghề nghiệp và lý do bạn có mặt tại buổi phỏng vấn.
Ví dụ: "Now, I'm looking for opportunities to expand my leadership in an international environment, and that's why I'm excited about this role at your company."

Với cấu trúc Present – Past – Future, câu trả lời vừa rõ ràng, vừa cho thấy bạn có tư duy chiến lược.

## Ví dụ: Một câu trả lời ấn tượng

Giả sử bạn đang ứng tuyển vị trí Business Development Manager:

"I am currently working as a Business Development Executive at DEF Company, where I focus on building partnerships in the fintech sector. Over the past three years, I've closed deals with more than 20 corporate clients, contributing to a 40% increase in annual revenue. Before that, I worked in consulting, which gave me a solid foundation in market analysis and stakeholder management. At this point in my career, I am eager to take on a more strategic role in business growth, and I see this opportunity as a perfect match for my skills and aspirations."

Câu trả lời này dài khoảng 60–70 giây, đủ để tạo ấn tượng mà không lan man. Nó kết hợp giữa thành tích định lượng (40% increase), kỹ năng cứng (market analysis), kỹ năng mềm (stakeholder management) và định hướng tương lai.

## Kết luận

"Tell me about yourself" không phải là một câu hỏi xã giao. Đó là cơ hội để bạn định vị bản thân trong mắt nhà tuyển dụng. Nếu biết cách hỏi lại khéo léo, chọn lọc thông tin thông minh, và luyện tập chiến lược trả lời, bạn sẽ biến câu hỏi tưởng dễ mà khó này thành bước đệm tạo ấn tượng chuyên nghiệp ngay từ đầu buổi phỏng vấn.`,
    image: "/images/blog/tell-me-about-yourself.webp",
    date: "2024-12-10",
    category: "Phỏng vấn",
    readTime: "7 phút đọc",
  },
  "power-method": {
    title: "Làm chủ nghệ thuật giới thiệu bản thân trong 90 giây",
    content: `## Vì sao 90 giây đầu tiên quan trọng?

Trong phỏng vấn, networking hay thậm chí trong các cuộc họp nội bộ, ấn tượng ban đầu có sức nặng hơn bạn tưởng. Chỉ trong vòng chưa đầy 2 phút, người đối diện sẽ hình thành đánh giá về mức độ chuyên nghiệp, sự tự tin và tiềm năng hợp tác của bạn.

Vấn đề là, phần lớn người đi làm bận rộn thường giới thiệu bản thân theo cách rất cơ bản: "Tôi làm ở công ty A, vị trí B, phụ trách C." Cách nói này mang tính mô tả chứ chưa đủ thuyết phục chiến lược. Kết quả là bạn hòa lẫn trong đám đông thay vì nổi bật.

Giải pháp nằm ở việc nâng cấp ngôn ngữ và áp dụng một khung giới thiệu có chiến lược – giúp bạn biến màn "chào hàng bản thân" thành cơ hội ghi điểm ngay từ những giây đầu tiên.

## Khung P.O.W.E.R: Công thức 5 bước để chào hàng hiệu quả

Để biến 90 giây thành "đòn bẩy", bạn có thể áp dụng khung P.O.W.E.R, một cấu trúc ngắn gọn nhưng đủ chiều sâu:

### P - Personal – Bạn là ai và đang theo đuổi điều gì?

Mở đầu bằng một câu giới thiệu sắc nét, có cá tính.
Ví dụ: "I am a business strategist passionate about helping companies scale sustainably."

### O - Objective – Mục tiêu nghề nghiệp hoặc lý do xuất hiện

Cho người đối diện biết bạn có mặt ở đây để làm gì.
Ví dụ: "I am here today to explore opportunities to contribute to digital transformation projects."

### W - Work – Lĩnh vực chuyên môn

Xác định rõ bạn thuộc ngành nào, làm việc trong lĩnh vực gì.
Ví dụ: "I specialize in supply chain optimization within the FMCG sector."

### E - Experience – Những dấu mốc nổi bật

Đưa ra 1–2 thành tích/kinh nghiệm tiêu biểu.
Ví dụ: "I have over 7 years of experience leading cross-border logistics initiatives across Southeast Asia."

### R - Results – Thành quả có thể định lượng

Kết thúc bằng một kết quả rõ ràng để chứng minh giá trị.
Ví dụ: "My latest project helped reduce operational costs by 18% while increasing delivery efficiency."

## Power Verbs: Nói ít nhưng mạnh

Bên cạnh cấu trúc, ngôn ngữ chính là yếu tố quyết định mức độ thuyết phục. Thay vì các cụm từ bị động, mờ nhạt như "I was in charge of…", hãy chuyển sang các động từ chủ động, mạnh mẽ:

- "I spearheaded a regional expansion project…"
- "I successfully led a cross-functional team of 15 members…"
- "I designed and implemented a new customer feedback system…"

Những động từ hành động này không chỉ làm câu chuyện của bạn rõ ràng hơn, mà còn cho thấy sự chủ động và khả năng dẫn dắt – những phẩm chất được nhà tuyển dụng và đối tác đánh giá cao.

## Thực hành cho người đi làm bận rộn

Bạn không cần chuẩn bị cả một bài diễn văn. Thay vào đó, hãy xây dựng một script 90 giây dựa trên P.O.W.E.R, rồi luyện tập cho đến khi nó trở thành phản xạ tự nhiên. Hãy nhớ:

- Tập trung vào sự súc tích – chỉ 1–2 ví dụ tiêu biểu
- Sử dụng Power Verbs để gia tăng sức mạnh thuyết phục
- Luyện tập trước gương hoặc ghi âm lại để chỉnh sửa nhịp điệu và độ tự tin

Chỉ với 90 giây, bạn có thể tạo dựng một hình ảnh chuyên nghiệp, chiến lược và đầy sức hút – cho dù đang ngồi trong phòng phỏng vấn, hội thảo ngành nghề, hay buổi pitching với đối tác.

## Kết luận

Trong thời đại cạnh tranh gay gắt, "chào hàng" bản thân không còn chỉ là một màn giới thiệu xã giao, mà là nghệ thuật tạo lợi thế ngay từ giây đầu tiên. Với khung P.O.W.E.R và sức mạnh của Power Verbs, bạn sẽ không còn giới thiệu bản thân một cách nhạt nhòa, mà biến 90 giây thành cơ hội để tỏa sáng.`,
    image: "/images/blog/power-method.webp",
    date: "2024-12-08",
    category: "Kỹ năng giao tiếp",
    readTime: "5 phút đọc",
  },
  "career-break": {
    title: "Career Break và rào cản vô hình mang tên định kiến",
    content: `## Career Break: Từ "khoảng trống" đến "trải nghiệm giá trị"

Trong vài năm trở lại đây, Career Break – quãng thời gian tạm dừng sự nghiệp vì lý do cá nhân, gia đình, học tập hay sức khỏe – dần được xã hội nhìn nhận với thái độ cởi mở hơn. Nếu trước đây, khoảng nghỉ này thường bị xem như một "dấu trừ" trong hồ sơ ứng viên, thì nay, nhiều doanh nghiệp đã bắt đầu coi đây là một trải nghiệm có giá trị.

Một Career Break có thể mang đến cho cá nhân cơ hội làm mới bản thân, rèn luyện kỹ năng mềm, học hỏi thêm tri thức, hoặc đơn giản là sạc lại năng lượng sau thời gian dài gắn bó với guồng quay công việc. Điều đó chứng minh rằng, Career Break không đồng nghĩa với "tụt hậu", mà đôi khi còn là điểm tựa để bứt phá trong chặng đường tiếp theo.

## Định kiến vẫn còn hiện hữu

Tuy vậy, song song với sự thay đổi tích cực ấy, định kiến về Career Break vẫn chưa biến mất. Một khảo sát quốc tế cho thấy: cứ 5 nhà tuyển dụng thì có 1 người thẳng thừng từ chối ứng viên có quãng dừng sự nghiệp dài – bất kể lý do là gì.

Nguyên nhân bắt nguồn từ quan niệm truyền thống: nghỉ việc đồng nghĩa với thiếu gắn bó, thiếu năng lực, hoặc mất khả năng bắt kịp xu hướng. Những quan niệm này tạo nên "rào cản vô hình", khiến không ít ứng viên – đặc biệt là phụ nữ – e ngại khi quay trở lại thị trường lao động.

## Sự thật: Career Break mang lại nhiều giá trị mới

Trên thực tế, rất nhiều ứng viên sau Career Break đã trở lại với năng lượng mới và sự trưởng thành rõ rệt. Họ thường sở hữu:

### Khả năng thích ứng mạnh mẽ
Khi trải qua những biến động cá nhân, việc quay lại môi trường công việc đòi hỏi sự kiên cường và nhanh nhạy với thay đổi.

### Kỹ năng mềm được trau dồi
Quản lý thời gian, kỹ năng giao tiếp, và khả năng cân bằng cuộc sống thường được rèn luyện tốt hơn sau một khoảng nghỉ.

### Tư duy sáng tạo và đa chiều
Những trải nghiệm ngoài công việc – từ chăm sóc gia đình, tham gia hoạt động xã hội, đến học tập thêm – đều góp phần làm phong phú góc nhìn của ứng viên.

Đặc biệt, với phụ nữ, Career Break đôi khi là hành trình nuôi dưỡng con nhỏ hay chăm sóc gia đình. Trở lại sau giai đoạn này, họ mang đến tổ chức một bộ kỹ năng quản trị nhân sự, kiên nhẫn và tinh thần trách nhiệm đáng kể.

## Ảnh hưởng ở tầm vĩ mô

Định kiến không chỉ dừng lại ở cấp độ cá nhân. Ở tầm vĩ mô, việc duy trì tư duy khắt khe về Career Break khiến xã hội lãng phí một nguồn lực quý giá.

Mỗi phụ nữ bị ngăn cản quay lại thị trường lao động chính là một cơ hội tăng trưởng bị bỏ lỡ. Thay vì tận dụng kinh nghiệm, kỹ năng và sự nỗ lực của họ, định kiến vô tình loại bỏ một lực lượng lao động có tiềm năng đóng góp lớn cho nền kinh tế. Điều này đi ngược lại mục tiêu phát triển bền vững mà nhiều quốc gia đang theo đuổi.

## Thách thức và hướng đi

Vấn đề hiện nay không chỉ là giúp phụ nữ tự tin quay lại sự nghiệp sau Career Break, mà còn là giúp doanh nghiệp cởi bỏ định kiến. Điều này đòi hỏi:

### Doanh nghiệp
Cần cập nhật tư duy tuyển dụng, đánh giá ứng viên dựa trên năng lực thực tế và tiềm năng phát triển, thay vì chỉ nhìn vào "khoảng trống" trong CV.

### Xã hội
Cần lan tỏa thông điệp tích cực, khuyến khích việc nghỉ ngơi, học tập, hay tạm dừng sự nghiệp như một phần tất yếu của hành trình lao động.

Ứng viên
Cần học cách trình bày Career Break như một trải nghiệm giá trị – giải thích những gì đã học được, và chứng minh năng lực phù hợp với công việc hiện tại.

Kết luận

Career Break không phải là sự đứt gãy, mà có thể là bước ngoặt để phát triển sự nghiệp. Khi định kiến dần được thay thế bằng sự công nhận, chúng ta không chỉ trao thêm cơ hội cho phụ nữ, mà còn mở ra một động lực tăng trưởng bền vững cho xã hội.`,
    image: "/images/blog/career-break.webp",
    date: "2024-12-05",
    category: "Phát triển sự nghiệp",
    readTime: "8 phút đọc",
  },
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = blogPosts[slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Header />
      <BlogPost post={post} />
      <Footer />
    </main>
  )
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }))
}
