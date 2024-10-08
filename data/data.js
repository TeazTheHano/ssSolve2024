let pillList = [
    {
        pill_id: ``,
        pill_name: ``,
        pill_brand: ``,
        pill_tags: [``], // e.g. (thuốc giảm đau, thuốc hạ sốt)
        pill_quantity: 10,
        pill_sellPrice: 0, // e.g. (10000)
        pill_buyPrice: 2000, // e.g. (2000)
        pill_packKind: ``, // e.g. (1 vỉ x 10 viên)
        pill_imgAddress: [``],
        pill_indication: [], // e.g. (chỉ định)
        pill_contraindication: [], // e.g. (chống chỉ định)
        pill_description: [], // e.g. (mô tả)
        pill_ingredient: [``], // e.g. (thành phần)
        pill_use: [], // e.g. (cách dùng)
        pill_dosage: [], // e.g. (liều lượng/ liều dùng)
        pill_pharmacology: [``],   // e.g. (cơ chế tác dụng/ dược lý)
        pill_pharmacokinetics: [``],   // e.g. (dược động học/ động học)
        pill_sideEffects: [], // e.g. (tác dụng phụ)
        pill_interactions: [], // e.g. (tương tác)
        pill_precautions: [], // e.g. (cảnh báo)
        pill_overdose: [], // e.g. (quá liều & quên liều)
        pill_overdose_handling: [], // e.g. (xử lý quá liều)
        pill_viewed: 10
    },

    {
        pill_id: 'P1235f',
        pill_name: 'Paracetamol giảm đau từ nhẹ đến vừa và hạ sốt',
        pill_tags: ['Giảm đau và Hạ sốt'],
        pill_brand: 'Mediplantex',
        pill_quantity: 100,
        pill_sellPrice: 5000,
        pill_buyPrice: 0,
        pill_packKind: '1 vỉ x 10 viên',
        pill_imgAddress: [require('../assets/image/pill/Thuốc_giảm_đau_và_hạ_sốt_-_Paracetamol.png')],
        pill_description: ['Paracetamol 500mg là thuốc được sử dụng phổ biến giúp giảm các triệu chứng đau từ nhẹ đến vừa và giảm mạnh các triệu chứng sốt nhẹ. Thuốc Paracetamol 500mg giúp hạ nhiệt, giảm đau. Không gây lệ thuộc thuốc, không gây kích ứng đường tiêu hóa.'],
        pill_use: [
            `Sử dụng thuốc cùng với một lượng nước ấm vừa phải.`,
            `Chờ ít nhất 4 tiếng trước khi sử dụng một liều khác.`,
            `Không nên sử dụng nhiều hơn 4 liều trong 24 giờ`,
        ],
        pill_ingredient: ['Paracetamol'],
        pill_indication: [
            `Với điều trị đau: Điều trị ở các chứng đau do các nguyên nhân khác nhau: Nhức đầu, đau nửa đầu, đau bụng kinh, đau dây thần kinh, đau nhức hệ xương cơ, đau răng.`,
            `Với điều trị sốt: Sốt do bị nhiễm khuẩn, viêm họng, viêm phế quản.`,
            `Làm giảm đau nhức và hạ sốt trong các trường hợp bị cảm lạnh, cảm cúm, sốt do virus.`,
        ],
        pill_contraindication: [
            `Bệnh nhân bị thiếu máu.`,
            `Người mắc chứng rối loạn trong đông máu.`,
            `Người mắc bệnh tạo keo, giảm thể tích tuần hoàn do sử dụng thuốc lợi tiểu hay suy thận, bệnh nhân hen suyễn.`,
            `Người bệnh quá mẫn với paracetamol hoặc các thành phần tá dược của thuốc.`,
            `Người bệnh bị suy giảm glucose-6-phosphat dehydrogenase.`,
            `Người bệnh có tiền sử phản ứng quá mẫn (co thắt phế quản, phù mạch, hen suyễn, viêm mũi, hoặc nổi mày đay) khi sử dụng aspirin hoặc các thuốc chống viêm không steroid (NSAID).`,
            `Bệnh nhân đã từng bị hoặc đang bị loét hay xuất huyết đường tiêu hóa.`,
            `Người bị suy gan nặng, suy thận nặng có Clcr < 30 ml/ phút, suy tim sung huyết.`,
        ],
        pill_dosage: [
            `Liều dùng cho người lớn:`,
            [
                `Liều dùng paracetamol 500mg thông thường để hạ sốt và giảm đau cho người lớn là từ 325 – 650mg trong mỗi 4 – 6 giờ hoặc 1.000mg trong 6 – 8 giờ.`,
                `Thuốc paracetamol 500mg viên nén có thể dùng đường uống hoặc đặt trực tràng.`,
            ],
            `Liều dùng cho trẻ em:`,
            [
                `Liều dùng để giảm đau và sốt bằng đường uống hoặc đặt trực tràng cho trẻ em như sau:`,
                `Dưới 1 tháng tuổi: Dùng 10 – 15mg/kg cho mỗi liều sau khoảng 4 – 6 giờ khi cần thiết.`,
                `Từ 1 tháng – 12 tuổi: Dùng 10 – 15mg/kg sau mỗi 4 – 6 giờ khi cần thiết (tối đa 5 liều trong vòng 24 giờ).`,
                `Hạ sốt cho trẻ từ 4 tháng – 9 tuổi: Nên dùng liều ban đầu là 30mg/kg.`,
                `Từ 12 tuổi trở lên: Dùng 325 – 650mg sau mỗi 4 – 6 giờ hoặc 1000mg mỗi 6 – 8 giờ.`,
                `Đối với trẻ béo phì: Sử dụng theo tuổi chứ không sử dụng theo kí lô cân nặng`,
                `Lưu ý đặc biệt và thận trọng khi sử dụng thuốc Paracetamol 500mg`,
                `Hiệu quả của thuốc hạ sốt và giảm đau Paracetamol 500mg còn tùy thuộc tình trạng và thể trạng của bệnh nhân.`,
                `Không uống nhiều thuốc này hơn liều khuyến cáo, vì quá liều acetaminophen sẽ gây ra nhiều tác hại nghiêm trọng. Liều lượng tối đa cho người lớn là 1g (1.000mg) mỗi lần và 4g (4.000mg) mỗi ngày.`,
            ],
            `Hỏi ý kiến bác sĩ nếu điều trị kéo dài quá 5 ngày ở trẻ em và quá 10 ngày ở người lớn.`,
            `Không được uống rượu trong thời gian điều trị bằng thuốc này.Vì rượu có thể làm tăng nguy cơ gây tổn thương gan.`,
            `Hỏi ý kiến bác sĩ khi dùng thuốc này cho trẻ dưới 3 tuổi.`,
            `Trẻ em dưới 12 tuổi liều dùng hàng ngày không vượt quá 2 gam.`,
            `Người có tiền sử nghiện rượu và bệnh gan, nên hỏi bác sĩ trước khi sử dụng thuốc.`,
            `Không uống thuốc khi bị dị ứng với paracetamol(acetaminophen hoặc N - acetyl - p - aminophenol).`,
            `Ngoài ra người bệnh cần phải ngưng sử dụng ngay và gặp bác sĩ nếu như:`,
            `Tiếp tục bị sốt sau thời gian khoảng 3 ngày sử dụng thuốc.`,
            `Tình trạng đau vẫn không chấm dứt sau 7 ngày sử dụng(hoặc sau 5 ngày đối với trẻ em).`,
            `Da bị nổi mẩn ngứa, đau đầu liên tục hoặc xuất hiện những đốm đỏ, sưng tấy.`,
            `Các triệu chứng trở nên trầm trọng hơn hoặc có thêm những triệu chứng bất thường mới.`,
            `Sử dụng cho người lái xe và vận hành máy móc`,
            `Chưa có báo cáo về những ảnh hưởng của thuốc giảm đau và hạ sốt Paracetamol 500mg trên khả năng lái xe hoặc sử dụng máy móc.`,
            `Tuy nhiên, qua một số theo dõi thì thuốc có thể sử dụng ở trên đối tượng này.`,
            `Sử dụng cho phụ nữ có thai hoặc đang cho con bú`,
            `Các nghiên cứu về việc dùng thuốc này trên phụ nữ có thai và đang cho con bú vẫn còn hạn chế.`,
            `Thời kỳ mang thai: Chưa xác định được tính an toàn của thuốc dùng khi thai nghén liên quan đến tác dụng không mong muốn có thể có đối với phát triển thai.Do đó, chỉ nên dùng thuoc paracetamol ở người mang thai khi thật cần.`,
            `Thời kỳ cho con bú: thuốc Paracetamol được bài tiết qua sữa mẹ nhưng không có ý nghĩa đáng kể trên lâm sàng.Dữ liệu được công bố không chống chỉ định sử dụng thuốc này cho phụ nữ cho con bú.`,

        ],
        pill_pharmacology: [
            `Paracetamol (còn có tên gọi khác là acetaminophen hoặc N-acetyl-p-aminophenol) là một loại chất chuyển hóa mang trong mình hoạt tính của phenacetin, được biết đến như một thuốc giảm đau - hạ sốt hữu hiệu và phổ biến có thể thay thế aspirin; tuy nhiên, khác với aspirin, paracetamol không có hiệu quả trong điều trị các trường hợp bị viêm.`,
            `Với liều dùng ngang nhau và được tính theo đơn vị gam, thì paracetamol có tác dụng giảm đau và hạ sốt tương tự như aspirin.`,
            `Paracetamol làm giảm thân nhiệt ở người bệnh sốt, nhưng hiếm khi làm giảm thân nhiệt ở người bình thường. Thuốc acetaminophen tác động lên vùng dưới đồi gây hạ nhiệt, tỏa nhiệt tăng do giãn mạch và tăng lưu lượng máu ngoại biên.`,
            `Với liều điều trị, acetaminophen ít tác động đến hệ tim mạch và hô hấp, không làm thay đổi cân bằng acid - base, không gây kích ứng, xước hoặc chảy máu dạ dày như khi dùng salicylat, vì paracetamol không tác dụng trên cyclooxygenase toàn thân, chỉ tác động đến cyclooxygenase/prostaglandin của hệ thần kinh trung ương. Paracetamol/acetaminophen không có tác dụng trên tiểu cầu hoặc thời gian chảy máu.`,
            `Khi sử dụng đến trạng thái quá liều, một chất chuyển hóa của paracetamol là N-acetyl-benzoquinonimin có thể gây độc nặng cho gan. Ở liều bình thường, paracetamol dung nạp tốt, không có nhiều tác dụng phụ của aspirin. Tuy vậy, quá liều cấp tính (trên 10 g) làm thương tổn gan gây chết người, và những vụ ngộ độc và tự vẫn bằng paracetamol đã tăng lên một cách đáng lo ngại trong những năm gần đây. Ngoài ra, nhiều người trong đó có cả thầy thuốc, dường như không biết tác dụng chống viêm kém của paracetamol.`,
        ],
        pill_pharmacokinetics: [
            `Hấp thu: Paracetamol được hấp thu nhanh và hầu như hoàn toàn thông qua đường tiêu hóa. Thức ăn có thể làm viên nén giải phóng kéo dài thuốc paracetamol chậm được hấp thu một phần. Thức ăn giàu carbon hydrat làm giảm tỷ lệ hấp thu của paracetamol. Nồng độ đỉnh trong huyết tương đạt trong vòng 30 đến 60 phút sau khi uống với liều điều trị.`,
            `Phân bố: Paracetamol (acetaminophen) phân bố nhanh và đồng đều trong phần lớn các mô của cơ thể. Khoảng 25% lượng paracetamol trong máu kết hợp với protein huyết tương.`,
            `Chuyển hóa: Paracetamol bị N-hydroxyl hóa bởi cytochrom P450 để tạo nên N-acetyl-benzoquinonimin, một chất trung gian có tính phản ứng cao. Chất chuyển hóa này bình thường phản ứng với các nhóm sulfhydryl trong glutathion và như vậy bị khử hoạt tính. Tuy nhiên, nếu uống liều cao paracetamol, chất chuyển hóa này được tạo thành với lượng đủ để làm cạn kiệt glutathion của gan; trong tình trạng đó, phản ứng của nó với nhóm sulfhydryl của protein gan tăng lên, có thể dẫn đến hoại tử gan.`,
            `Thải trừ: Nửa đời huyết tương của paracetamol là 1,25 - 3 giờ, có thể kéo dài với liều gây độc hoặc ở người bệnh có thương tổn gan. Sau liều điều trị, có thể tìm thấy 90 đến 100% thuốc trong nước tiểu trong ngày thứ nhất, chủ yếu sau khi liên hợp trong gan với acid glucuronic (khoảng 60%), acid sulfuric (khoảng 35%) hoặc cystein (khoảng 3%); cũng phát hiện thấy một lượng nhỏ những chất chuyển hóa hydroxyl - hóa và khử acetyl. Trẻ nhỏ ít khả năng glucuro liên hợp với thuốc hơn so với người lớn.`,
        ],
        pill_sideEffects: [
            `Các phản ứng phụ có thể xảy ra khi điều trị giảm đau, hạ sốt bằng thuoc Paracetamol bao gồm:`,
            `Thường gặp:`,
            [
                `Mẩn ngứa, ngoại ban.`,
                `Sốt, mỏi mệt.`,
                `Chướng bụng, buồn nôn, nôn.`,
                `Nhức đầu, hoa mắt, chóng mặt, bồn chồn.`,
            ],
            `Ít gặp:`,
            [
                `Phản ứng dị ứng, viêm mũi, nổi mày đay.`,
                `Đau bụng, chảy máu dạ dày - ruột, làm loét dạ dày tiến triển.`,
                `Lơ mơ, mất ngủ, ù tai; rối loạn thị giác, thính lực giảm.`,
                `Thời gian chảy máu kéo dài.`,
                `Bệnh thận, độc tính thận khi lạm dụng dài ngày.`,
                `Giảm bạch cầu trung tính, giảm toàn thể huyết cầu, thiếu máu.`,
            ],
            `Hiếm gặp:`,
            [
                `Hội chứng Steven - Johnson, rụng tóc.`,
                `Trầm cảm, viêm màng não vô khuẩn, nhìn mờ, rối loạn nhìn màu, giảm thị lực do ngộ độc thuốc.`,
                `Rối loạn co bóp túi mật, nhiễm độc gan, viêm bàng quang, tiểu ra máu.​`,
                `Danh sách trên không bao gồm tất cả các tác dụng không mong muốn có thể gặp phải.`,
                `Hãy gọi cho các bác sĩ, dược sĩ đề được tư vấn kịp thời khi gặp phải bất kỳ tác dụng không mong muốn nào.`,
            ]
        ],
        pill_interactions: [
            `Việc sử dụng thuốc hạ sốt Paracetamol 500mg với một số thuốc khác (thuốc kê đơn hoặc không kê đơn) có thể làm thay đổi công dụng của thuốc.`,
            `Một số thuốc có thể tương tác với thuốc hạ sốt paracetamol Mediplantex bao gồm:`,
            [
                `Thuốc khác cũng chứa paracetamol`,
                `Amitriptyline, Amlodipine, Amoxicillin, Aspirin, Atorvastatin.`,
                `Caffeine, Clopidogrel, Codeine.`,
                `Diazepam, Diclofenac.`,
                `Furosemide, Gabapentin, Ibuprofen.`,
                `Lansoprazolem Levofloxacin, Levothyroxine.`,
                `Metformin, Naproxen, Omeprazole.`,
                `Pantoprazole, Prednisolone, Pregabalin.`,
                `Ramipril, Ranitidine, Sertraline`,
                `Simvastatin, Tramadol.`,
            ],
            `Khi sử dụng Thuốc Paracetamol 500mg tốt nhất bệnh nhân nên thông báo cho bác sĩ biết về các loại thuốc mà mình đang sử dụng để bác sĩ tư vấn tránh xảy ra các tương tác không mong muốn.​`,

        ],
        pill_precautions: [],
        pill_overdose: [
            `Nếu bỏ lỡ một liều thuốc Paracetamol sủi thì nên bổ sung ngay sau khi bệnh nhân nhớ ra. Nếu quên một liều thuốc quá lâu mà gần tới thời gian sử dụng liều tiếp theo thì bỏ qua liều đã quên. Không sử dụng 2 liều thuốc cùng một lúc để bù cho liều đã quên.`,
            `Quá liều thuốc:`,
            `Dù cơ thể không xuất hiện triệu chứng gì bất thường, vẫn gọi ngay cho nhân viên y tế để được tư vấn cũng như đưa ra các biện pháp hỗ trợ xử lý kịp thời, bởi nếu trì hoãn thời gian cấp cứu sẽ làm tăng nguy cơ tổn thương gan nghiêm trọng.`,
            `Nếu người bệnh hoặc bất kì ai uống cùng lúc nhiều viên thuốc, hoặc nếu biết một đứa trẻ có nuốt bất kỳ viên thuốc nào trong số này, gọi ngay cho bác sĩ/ dược sĩ hoặc khoa cấp cứu bệnh viện ngay lập tức để xử lý kịp thời.`,
            `Luôn mang theo thuốc bên mình, thậm chí cả hộp thuốc và tờ hướng dẫn sử dụng nhằm giúp việc đánh giá dễ dàng hơn.`,

        ],
        pill_overdose_handling: ['Trên thực tế dị ứng paracetamol không phổ biến. Một số triệu chứng dị ứng paracetamol như nổi mề. Cần ngưng sử dụng thuốc và đến gặp ngay bác sĩ.'],
        pill_viewed: 100,
    },
    {
        pill_id: 'P1345n',
        pill_name: 'Thuốc giảm đau TK3 300mg Hadiphar giúp giảm đau, hạ sốt',
        pill_tags: ['Giảm đau và Hạ sốt'],
        pill_brand: '',
        pill_quantity: 100,
        pill_sellPrice: 5000,
        pill_buyPrice: 0,
        pill_packKind: '1 vỉ x 10 viên',
        pill_imgAddress: [require('../assets/image/pill/Cảm_lạnh_thông_thường_-_TK3.png')],
        pill_indication: ['Điều trị triệu chứng trong các trường hợp: Cảm sốt, đau đầu, đau nửa đầu, đau răng, đau họng, đau sau nhổ răng, đau bụng kinh, đau cơ xương, đau do viêm khớp, đau dây thần kinh, hạ sốt trong viêm nhiễm.'],
        pill_use: [
            'Thuốc dùng đường uống.'
        ],
        pill_ingredient: [''],
        pill_description: [

        ],
        pill_dosage: [
            `Người lớn (kể cả người cao tuổi) và trẻ em từ 12 tuổi trở lên`,
            [
                `Nên dùng 2 viên mỗi lần. Khoảng cách liều tối thiểu: 4 giờ. Liều tối đa hàng ngày: 12 viên trong 24 giờ.`,
                `Thời gian tối đa dùng thuốc không có tư vấn của bác sĩ: 7 ngày. `,
            ],
            `Trẻ em dưới 12 tuổi`,
            [
                `Không khuyến nghị dùng thuốc này.`,
            ],
            `Không dùng quá liều chỉ định. Không dùng với các thuốc khác có chứa paracetamol, các thuốc chống xung huyết, các thuốc chống cảm cúm khác.`,
            `Lưu ý: Liều dùng trên chỉ mang tính chất tham khảo. Liều dùng cụ thể tùy thuộc vào thể trạng và mức độ diễn tiến của bệnh. Để có liều dùng phù hợp, bạn cần tham khảo ý kiến bác sĩ hoặc chuyên viên y tế.`,

        ],
        pill_pharmacology: [

        ],
        pill_pharmacokinetics: [

        ],
        pill_sideEffects: [
            `Khi sử dụng thuốc Giảm Đau Tk3 , bạn có thể gặp các tác dụng không mong muốn (ADR).`,
            `Paracetamol`,
            [
                `Rất hiếm (< 1/10000)`,
                `Rối loạn máu và hệ bạch huyết: Giảm tiểu cầu. `,
                `Rối loạn hệ miễn dịch: Phản ứng quá mẫn. Phản ứng dị ứng da như ban đỏ, phù mạch, hội chứng Stevens - Johnson. `,
                `Rối loạn hệ hô hấp, ngực và trung thất: Co thắt phế quản ở các bệnh nhân nhạy cảm với aspirin và các NSAID khác. `,
                `Rối loạn gan mật: Bất thường gan. `,
            ],
            `Cafein `,
            [
                `Không xác định được tần suất `,
                `Hệ thần kinh trung ương: Bồn chồn, chóng mặt. Khi dùng liều khuyến nghị paracetamol - cafein cùng với chế độ ăn uống có nhiều cafein, có thể gặp các tác dụng phụ do quá liều cafein như mất ngủ, thao thức, lo lắng, cáu kỉnh, đau đầu, rối loạn tiêu hóa, hồi hộp. `,
            ],
            `Phenylephrin `,
            [
                `Các rối loạn tâm thần: Bồn chồn. `,
                `Các rối loạn trên hệ thần kinh: Đau đầu, chóng mặt, mất ngủ. `,
                `Các rối loạn trên tim: Tăng huyết áp. `,
                `Các rối loạn trên đường tiêu hóa: Buồn nôn, nôn. `,
                `Rối loạn về mắt: Giãn đồng tử, glaucoma góc đóng cấp tính, thường hay xảy ra ở những bệnh nhân có tiền sử bị glaucoma góc đóng. `,
                `Các rối loạn trên tim: Nhịp tim nhanh, hồi hộp. `,
                `Các rối loạn da và dưới da: Phản ứng dị ứng (như phát ban, mày đay, viêm da dị ứng). `,
                `Các rối loạn thận và đường tiết niệu: Bí tiểu. Thường hay xảy ra ở những bệnh nhân bị đường tiểu tắc nghẽn như bệnh nhân phì đại tuyến tiền.`,
            ],
            `Hướng dẫn cách xử trí ADR`,
            `Tham vấn bác sĩ, dược sĩ nếu gặp phải tác dụng không mong muốn khi sử dụng thuốc. `,

        ],
        pill_interactions: [

        ],
        pill_precautions: [
            `Làm gì khi quên 1 liều?: \nKhông thay đổi liều dùng cho lần tiếp theo, tiếp tục dùng thuốc cho hết đợt điều trị. `,
        ],
        pill_overdose: [
            `Nhiễm độc paracetamol có thể do dùng một liều độc duy nhất, hoặc do uống lặp lại liều lớn paracetamol (ví dụ, 7,5 - 10g mỗi ngày, trong 1 - 2 ngày), hoặc do uống thuốc dài ngày. Hoại tử gan phụ thuộc liều là tác dụng độc cấp tính nghiêm trọng nhất do quá liều và có thể gây tử vong.`,
            `Buồn nôn, nôn, và đau bụng thường xảy ra trong vòng 2 - 3 giờ sau khi uống liều độc của thuốc. Methemoglobin - máu, dẫn đến chứng xanh tím da, niêm mạc và móng tay là một dấu hiệu đặc trưng nhiễm độc cấp tính dẫn chất p - aminophenol, một lượng nhỏ sulfhemoglobin cũng có thể được sản sinh. Trẻ em có khuynh hướng tạo methemoglobin dễ hơn người lớn sau khi uống paracetamol.`,
            `Khi bị ngộ độc nặng, ban đầu có thể có kích thích hệ thần kinh trung ương, kích động, và mê sảng. Tiếp theo có thể là ức chế hệ thần kinh trung ương, sững sờ, hạ thân nhiệt, mệt lả, thở nhanh - nông, mạch nhanh - yếu - không đều, huyết áp thấp, suy tuần hoàn. Trụy mạch do giảm oxy huyết tương đối và do tác dụng ức chế trung tâm, tác dụng này chỉ xảy ra với liều rất lớn. Sốc có thể xảy ra nếu giãn mạch nhiều. Cơn co giật nghẹt thở gây tử vong có thể xảy ra. Thường hôn mê xảy ra trước khi chết đột ngột hoặc sau vài ngày hôn mê.`,
            `Dấu hiệu lâm sàng thương tổn gan trở nên rõ rệt trong vòng 2 đến 4 ngày sau khi uống liều độc. Aminotransferase huyết tương tăng (đôi khi tăng rất cao) và nồng độ bilirubin trong huyết tương cũng có thể tăng. Thêm nữa, khi thương tổn gan lan rộng, thời gian prothrombin kéo dài. Có thể 10% người bệnh bị ngộ độc không được điều trị đặc hiệu đã có thương tổn gan nghiêm trọng, trong số đó 10% đến 20% cuối cùng chết vì suy gan. Suy thận cấp cũng xảy ra ở một số người bệnh. Sinh thiết gan phát hiện hoại tử trung tâm tiểu thùy trừ vùng quanh tĩnh mạch cửa. Ở những trường hợp không tử vong, thương tổn gan phục hồi sau nhiều tuần hoặc nhiều tháng.`,
            `Phenylephrin HCl: Dùng quá liều làm tăng huyết áp, đau đầu, cơn co giật, xuất huyết não, đánh trống ngực, ngoại tâm thu, dị cảm, nhịp tim chậm thường xảy ra sớm.                `,
        ],
        pill_overdose_handling: [
            `Chẩn đoán sớm rất quan trọng trong điều trị quá liều paracetamol. Có những phương pháp xác định nhanh nồng độ thuốc trong huyết tương. Tuy vậy, không được trì hoãn điều trị trong khi chờ kết quả xét nghiệm nếu bệnh sử gợi ý là quá liều nặng. Khi nhiễm độc nặng, điều quan trọng là phải điều trị hỗ trợ tích cực. Cần rửa dạ dày trong mọi trường hợp, tốt nhất trong vòng 4 giờ sau khi uống.`,
            `Liệu pháp giải độc chính là dùng những hợp chất sulfhydryl, có lẽ tác động một phần do bổ sung dự trữ glutathion ở gan.`,
            `N-acetylcystein có tác dụng khi uống hoặc tiêm tĩnh mạch. Phải cho thuốc ngay lập tức nếu chưa đến 36 giờ kể từ khi uống paracetamol. Ðiều trị với N - acetylcystein có hiệu quả hơn khi cho thuốc trong thời gian dưới 10 giờ sau khi uống paracetamol. Khi cho uống, hòa loãng dung dịch N - acetylcystein với nước hoặc đồ uống không có rượu để đạt dung dịch 5% và phải uống trong vòng 1 giờ sau khi pha. Cho uống N - acetylcystein với liều đầu tiên là 140mg/kg, sau đó cho tiếp 17 liều nữa, mỗi liều 70mg/kg cách nhau 4 giờ một lần. Chấm dứt điều trị nếu xét nghiệm paracetamol trong huyết tương cho thấy nguy cơ độc hại gan thấp.`,
            `Tác dụng không mong muốn của N - acetylcystein gồm ban da (gồm cả mày đay, không yêu cầu phải ngừng thuốc), buồn nôn, nôn, ỉa chảy, và phản ứng kiểu phản vệ.`,
            `Nếu không có N - acetylcystein, có thể dùng methionin (xem chuyên luận Methionin). Ngoài ra có thể dùng than hoạt và/hoặc thuốc tẩy muối, chúng có khả năng làm giảm hấp thụ paracetamol.`,
            `Tăng huyết áp có thể khắc phục bằng cách dùng thuốc chẹn α-adrenergic như phentolanim 5 – 10mg tiêm tĩnh mạch. Cần chú ý đến điều trị triệu chứng và hỗ trợ chăm sóc y tế.`,

        ],
        pill_viewed: 100,
    },
    {
        pill_id: 'P1636h',
        pill_name: 'Thuốc Ibuprofen 200 Nadyphar giảm đau, kháng viêm thống kinh, nhức đầu, đau răng, viêm khớp (10 vỉ x 10 viên)',
        pill_tags: ['Giảm đau và Hạ sốt'],
        pill_brand: '',
        pill_quantity: 100,
        pill_sellPrice: 4300,
        pill_buyPrice: 0,
        pill_packKind: '1 vỉ x 10 viên',
        pill_imgAddress: [require('../assets/image/pill/Thuốc_giảm_đau_và_hạ_sốt_-_Ibuprofen.png')],
        pill_indication: [
            `Thuốc Ibuprofen 200 Nadyphar 10x10 được chỉ định dùng trong các trường hợp sau:`,
            [
                `Chống đau và viêm từ nhẹ đến vừa: Thống kinh, nhức đầu và đau nửa đầu, đau răng, viêm khớp dạng thấp, viêm xương khớp, viêm túi thanh mạc.`,
                `Sử dụng kết hợp trong giảm đau sau phẫu thuật hay ung thư, hạ sốt ở trẻ em.`,
            ]
        ],
        pill_use: [
            `Thuốc dùng đường uống, uống sau bữa ăn.`
        ],
        pill_ingredient: [''],
        pill_description: [

        ],
        pill_dosage: [
            `Theo hướng dẫn của thầy thuốc, trung bình:`,
            `Người lớn`,
            [
                `Giảm đau và hạ sốt: Mỗi lần 1 - 2 viên, ngày 2 - 3 lần.`,
                `Kháng viêm: Mỗi lần 2 viên, ngày 3 - 4 lần.`,
            ],
            `Trẻ em (cân nặng dưới 30 kg)`,
            [
                `Giảm đau và hạ sốt: 20 - 30mg/kg thể trọng/ngày, chia làm 3 - 4 lần.`,
                `Kháng viêm: 40mg/kg thể trọng/ngày, chia làm 3 - 4 lần.`,
            ],
            `Lưu ý: Liều dùng trên chỉ mang tính chất tham khảo. Liều dùng cụ thể tùy thuộc vào thể trạng và mức độ diễn tiến của bệnh. Để có liều dùng phù hợp, bạn cần tham khảo ý kiến bác sĩ hoặc chuyên viên y tế.                `,
        ],
        pill_pharmacology: [
            `Ibuprofen là thuốc chống viêm không steroid, dẫn xuất từ acid propionic. Giống như các thuốc chống viêm không steroid khác, Ibuprofen có tác dụng giảm đau, hạ sốt và chống viêm. Cơ chế tác dụng của thuốc là ức chế prostaglandin synthetase, do đó ngăn tạo ra prostaglandin, thrombxan và các sản phẩm khác của cyclooxygenase. Ibuprofen cũng ức chế tổng hợp prostacyclin ở thận và có thể gây nguy cơ ứ nước do làm giảm dòng máu tới thận. Cần phải để ý đến điều này đối với các người bệnh bị suy thận, suy tim, suy gan và các bệnh có rối loạn về thể tích huyết tương.`,
            `Tác dụng chống viêm của Ibuprofen xuất hiện sau hai ngày điều trị. Ibuprofen có tác dụng hạ sốt mạnh hơn aspirin, nhưng kém indomethacin. Thuốc có tác dụng chống viêm tốt và có tác dụng giảm đau tốt trong điều trị viêm khớp dạng thấp thiếu niên.`,
            `Ibuprofen là thuốc an toàn nhất trong các thuốc chống viêm không steroid.`,
        ],
        pill_pharmacokinetics: [
            `Ibuprofen hấp thu tốt ở ống tiêu hóa. Nồng độ tối đa của thuốc trong huyết tương đạt được sau khi uống từ 1 đến 2 giờ. Thuốc gắn rất nhiều với protein huyết tương. Nửa đời của thuốc khoảng 2 giờ. Ibuprofen đào thải rất nhanh qua nước tiểu (1% dưới dạng không đổi, 14% dưới dạng liên hợp).`
        ],
        pill_sideEffects: [
            `Khi sử dụng thuốc Ibuprofen 200 Nadyphar 10X10, bạn có thể gặp các tác dụng không mong muốn (ADR).`,
            [
                `Tiêu hóa: Chướng bụng, buồn nôn, nôn, (chảy máu dạ dày - ruột, làm loét dạ dày tiến triển: Ít gặp).`,
                `Da: Phát ban, ngứa;`,
                `Mắt: Rối loạn thị giác;`,
                `Thần kinh trung ương: Chóng mặt, nhức đầu.`,
            ],
            `Hướng dẫn cách xử trí ADR`,
            `Thông báo cho bác sĩ những tác dụng không mong muốn gặp phải khi sử dụng thuốc.`,
        ],
        pill_interactions: [

        ],
        pill_precautions: [],
        pill_overdose: [

        ],
        pill_overdose_handling: [
            `Thường điều trị triệu chứng và hỗ trợ. Áp dụng biện pháp tăng đào thải và bất hoạt thuốc rửa dạ dày, gây nôn và lợi tiểu, uống than hoạt hay thuốc tẩy muối. Nếu nặng thẩm tách máu hoặc truyền máu.`,
            `Làm gì khi quên 1 liều? \nNếu bạn quên một liều thuốc, hãy dùng càng sớm càng tốt. Tuy nhiên, nếu gần với liều kế tiếp, hãy bỏ qua liều đã quên và dùng liều kế tiếp vào thời điểm như kế hoạch. Lưu ý rằng không nên dùng gấp đôi liều đã quy định.`
        ],
        pill_viewed: 100,
    },
    {
        pill_id: 'U7342h',
        pill_name: 'Thuốc Actadol 500 Medipharco điều trị các chứng đau và sốt từ nhẹ đến vừa (10 vỉ x 10 viên)',
        pill_tags: ['Giảm đau và Hạ sốt'],
        pill_brand: '',
        pill_quantity: 100,
        pill_sellPrice: 5000,
        pill_buyPrice: 0,
        pill_packKind: '1 vỉ x 10 viên',
        pill_imgAddress: [require('../assets/image/pill/Tatanol.png')],
        pill_indication: [
            `Thuốc Tatanol được chỉ định dùng trong các trường hợp sau:`,
            `Thuốc có tác dụng giảm đau, hạ sốt từ nhẹ đến vừa.`,
            `Giảm đau tạm thời trong điều trị các cơn đau do cảm cúm, nhức đầu, đau họng, đau nhức cơ xương, đau do hành kinh, đau răng, đau nửa đầu.`
        ],
        pill_contraindication: [
            `Thuốc Tatanol chống chỉ định trong các trường hợp sau:`,
            `Bệnh nhân mẫn cảm với thành phần của thuốc.`,
            `Bệnh nhân thiếu hụt glucose - 6 - phosphat dehydrogenase.`,
            `Người bệnh nhiều lần thiếu máu.`,
            `Suy gan nặng.`,
            `Có bệnh tim, phổi, thận.`,
        ],
        pill_use: [
            `Thuốc Tatanol 500 dùng đường uống.`
        ],
        pill_ingredient: [''],
        pill_description: [

        ],
        pill_dosage: [
            `Người lớn và trẻ em trên 12 tuổi 1 viên/lần x 2 - 3 lần/ngày, khoảng cách các liều dùng cách nhau ít nhất 4 giờ. Không được dùng quá 8 viên/ngày.`,
            `Trẻ em > 6 tuổi: 1 viên/lần x 1 lần/ngày. Không được dùng quá 4 viên /ngày.`,
            `Không được dùng acetaminophen để tự điều trị giảm đau quá 10 ngày ở người lớn hoặc quá 5 ngày ở trẻ em, trừ khi do thầy thuốc hướng dẫn.`,
            `Không dùng acetaminophen cho người lớn và trẻ em để tự điều trị sốt cao (trên 39,5°C), sốt kéo dài trên 3 ngày, hoặc sốt tái phát, trừ khi do thầy thuốc hướng dẫn, vì sốt như vậy có thể là dấu hiệu của một bệnh nặng cần được thầy thuốc chẩn đoán nhanh chóng.`,
            `Lưu ý: Liều dùng trên chỉ mang tính chất tham khảo. Liều dùng cụ thể tùy thuộc vào thể trạng và mức độ diễn tiến của bệnh. Để có liều dùng phù hợp, bạn cần tham khảo ý kiến bác sĩ hoặc chuyên viên y tế.                `,
        ],
        pill_pharmacology: [
            `Thuốc giảm đau, hạ sốt`,
            `Cơ chế giảm đau: Ức chế tổng hợp prostaglandin - chất trung gian gây đau.`,
            `Cơ chế hạ sốt: Ức chế tổng hợp prostaglandin ở trung tâm điều nhiệt vùng đồi thị gây giãn mạch ngoại biên kết quả làm tăng sự lưu thông máu qua da, tăng tiết mồ hôi, hạ nhiệt.`
        ],
        pill_pharmacokinetics: [
            `Acetaminophen được hấp thu nhanh chóng và hoàn toàn khi dùng đường uống. Tmax 1- 3 giờ. Thời gian kéo dài tác động 3 - 4 giờ.`,
            `Phân phối nhanh đến tất cả các mô. Tỉ lệ gắn kết với protein ở liều điều trị là 10%. Khoảng 90 - 95% liều dùng được chuyển hóa ở gan chủ yếu do liên hợp với acid glucuronic, sulfat và cystein. Chuyển hóa rất nhanh và có thể tích lũy trong trường hợp quá liều sau khi các đường chuyển hóa chủ yếu đã bị lão hóa. Khi thuốc bị tích lũy có thể gây độc gan và thận.`,
            `Thời gian bán hủy T1/2 khoảng 1 - 4 giờ. Thải trừ qua nước tiểu chủ yếu ở dạng liên hợp.`
        ],
        pill_sideEffects: [
            `Khi sử dụng thuốc Tatanol, bạn có thể gặp các tác dụng không mong muốn (ADR).`,
            `Ban da và những phản ứng dị ứng khác thỉnh thoảng xảy ra. Thường là ban đỏ hoặc mày đay, nhưng đôi khi nặng hơn và có kèm theo sốt do thuốc và thương tổn niêm mạc. Người bệnh mẫn cảm với salicylat hiếm mẫn cảm với acetaminophen và những thuốc có liên quan. Trong một số ít trường hợp riêng rẻ, acetaminophen đã gây giảm bạch cầu trung tính, giảm tiểu cầu và giảm toàn thể huyết cầu.`,
            `Ít gặp, 1/1000 < ADR < 1/100`,
            `Da: Ban.`,
            `Dạ dày - ruột: Buồn nôn, nôn.`,
            `Huyết học: Loạn tạo máu (giảm bạch cầu trung tính, giảm toàn thể huyết cầu, giảm bạch cầu), thiếu máu.`,
            `Thận: Bệnh thận, độc tính thận khi lạm dụng dài ngày.`,
            `Hiếm gặp, ADR< 1/1000`,
            `Khác: Phản ứng quá mẫn.`,
            `Hướng dẫn cách xử trí ADR`,
            `Thông báo cho thầy thuốc tác dụng không mong muốn gặp phải khi sử dụng thuốc.`,
        ],
        pill_interactions: [

        ],
        pill_precautions: [],
        pill_overdose: [

        ],
        pill_overdose_handling: [
            `Triệu chứng: Tiêu chảy, chán ăn, buồn nôn, nôn, xanh xao, đau bụng, tăng tiết mồ hôi, độc gan. Các triệu chứng này thường xuất hiện trong 24 giờ đầu và có thể vẫn xảy ra sau 2 - 4 ngày.`,
            `Điều trị: Phải chuyển ngay đến bệnh viện, gây nôn hay rửa dạ dày để loại trừ thuốc đã uống. Uống than hoạt tính (than hoạt có thể làm giảm hiệu quả điều trị khi dùng acetylcystein để điều trị quá liều acetaminophen). Dùng thuốc giải độc đặc hiệu N-acetylcystein, lượng N-acetylcystein được dùng tùy theo lượng acetaminophen đã dùng. Khuyến cáo nên sử dụng ngay N-acetylcystein sau khi đã uống quá liều acetaminophen nhất là trong vòng 10 - 12 giờ. Xác định nồng độ acetaminophen chậm nhất sau 4 giờ.`,
            `Thẩm phân trong trường hợp sau 24 giờ đã uống quá liều mà chưa điều trị bằng N - acetylcystein. Điều trị nâng đỡ tổng trạng, duy trì cân bằng nước, chất điện giải.`,
            `Làm gì khi quên 1 liều?`,
            [
                `Vì acetaminophen thường chỉ được sử dụng khi cần thiết, bạn có thể không theo lịch trình dùng thuốc.`,
                `Nếu bạn đang sử dụng thuốc thường xuyên, hãy sử dụng liều đã quên ngay khi nhớ ra. Nếu gần đến thời gian dùng liều thường xuyên tiếp theo, hãy bỏ qua liều đã quên và sử dụng liều tiếp theo theo chỉ dẫn. Không sử dụng thêm thuốc để bù cho liều đã quên.`,
            ]
        ],
        pill_viewed: 100,
    },
    {
        pill_id: 'G7362s',
        pill_name: 'Thuốc Hapacol Blue 500 DHG điều trị đau đầu, đau nửa đầu, đau răng (10 vỉ x 10 viên)',
        pill_tags: ['Giảm đau và Hạ sốt'],
        pill_brand: '',
        pill_quantity: 100,
        pill_sellPrice: 4000,
        pill_buyPrice: 0,
        pill_packKind: '1 vỉ x 10 viên',
        pill_imgAddress: [require('../assets/image/pill/Hapacol_Blue.png')],
        pill_indication: [
            `Thuốc Hapacol Blue được chỉ định dùng trong các trường hợp sau:`,
            `Điều trị các triệu chứng đau trong các trường hợp, đau đầu, đau nửa đầu, đau răng, đau nhức do cảm cúm, đau họng, đau nhức cơ xương, đau do viêm khớp, đau sau khi tiêm ngừa hay nhổ răng.`,
            `Hạ sốt ở bệnh nhân bị cảm hay những bệnh có liên quan đến sốt.`,
        ],
        pill_contraindication: [`Quá mẫn với một trong các thành phần của thuốc. Người bệnh thiếu hụt Glucose -6 - Phosphat Dehydrogenase.`],
        pill_use: [
            `Dùng đường uống.`
        ],
        pill_ingredient: [''],
        pill_description: [

        ],
        pill_dosage: [
            `Người lớn và trẻ em 12 tuổi`,
            `Uống 1 viên/lần. Đau nhiều người lớn có thể uống 2 viên/lần.`,
            `Khoảng cách giữa 2 lần uống phải hơn 4 giờ và không uống quá 8 viên/ngày.`,
            `Lưu ý: Liều dùng trên chỉ mang tính chất tham khảo. Liều dùng cụ thể tùy thuộc vào thể trạng và mức độ diễn tiến của bệnh. Để có liều dùng phù hợp, bạn cần tham khảo ý kiến bác sĩ hoặc chuyên viên y tế.                `,
        ],
        pill_pharmacology: [
            `Paracetamol là thuốc giảm đau - hạ sốt hữu hiệu. Thuốc tác động lên trung tâm điều nhiệt ở vùng dưới đôi gây hạ nhiệt, tăng tỏa nhiệt do giãn mạch và tăng lưu lượng máu ngoại biên làm giảm thân nhiệt ở người bị sốt, nhưng hiếm khi làm giảm thân nhiệt bình thường.`,
            `Ở liều điều trị, hiệu quả giảm đau, hạ sốt tương đương Aspirin nhưng Paracetamol ít tác động đến hệ tim mạch và hệ hô hấp, không làm thay đổi cân bằng Acid - Base, không gây kích ứng, xước hoặc chảy máu dạ dày.`
        ],
        pill_pharmacokinetics: [
            `Paracetamol hấp thu nhanh chóng và hầu như hoàn toàn qua đường tiêu hóa. Thời gian bán thải là 1,25 - 3 giờ. Thuốc chuyển hóa ở gan và thải trừ qua thận.`
        ],
        pill_sideEffects: [
            `Khi sử dụng thuốc Hapacol Blue, bạn có thể gặp các tác dụng không mong muốn (ADR). Một số tác dụng phụ được ghi nhận trong các nghiên cứu trên người dùng thuốc này là:`,
            `Ít gặp`,
            `Ban da, buồn nôn, nôn, bệnh thận, độc tính thận khi lạm dụng dài ngày, giảm bạch cầu trung tính, giảm toàn thể huyết cầu, thiếu máu.`,
            `Hiếm gặp phản ứng quá mẫn.`,
            `Đây không phải là danh mục đầy đủ tất cả các tác dụng phụ và có thể xảy ra những tác dụng phụ khác. Nếu bạn gặp phải bất kỳ tác dụng không mong muốn nào, hãy ngưng dùng thuốc Hapacol Blue và thông báo ngay cho bác sĩ hoặc đến ngay cơ sở y tế gần nhất để được xử trí kịp thời.                `,
        ],
        pill_interactions: [

        ],
        pill_precautions: [],
        pill_overdose: [
            `Không dùng quá liều lượng được kê. Dùng thuốc nhiều hơn sẽ không cải thiện triệu chứng của bạn, thay vào đó chúng có thể gây ngộ độc hoặc những tác dụng phụ nghiêm trọng. Nếu bạn nghi vấn rằng bạn hoặc ai khác có thể đã sử dụng quá liều Hapacol vui lòng đến phòng cấp cứu tại bệnh viện hoặc viện chăm sóc gần nhất. Mang theo hộp, vỏ, hoặc nhãn hiệu thuốc với bạn để giúp các bác sĩ có thông tin cần thiết.`,
            `Quá liều Paracetamol do dùng một liều độc duy nhất hoặc do uống lặp lại liều lớn Paracetamol (7,5 - 10g mỗi ngày, trong 1 - 2 ngày) hoặc do uống thuốc dài ngày. Hoại tử gan phụ thuộc liều là tác dụng độc cấp tính nghiêm trọng nhất do quá liều và có thể gây tử vong.`,
            `Biểu hiện của quá liều Paracetamol: Buồn nôn, nôn, đau bụng, triệu chứng xanh tím da, niêm mạc và móng tay.`,
            `Biểu hiện của ngộ độc nặng Paracetamol: Ban đầu kích thích nhẹ, kích động và mê sảng. Tiếp theo là ức chế hệ thần kinh trung ương sững sờ, hạ thân nhiệt, mệt lả, thở nhanh và nông: Mạch nhanh, yếu, không đều, huyết áp thấp và suy tuần hoàn.                `,
        ],
        pill_overdose_handling: [
            `Chẩn đoán sớm rất quan trọng trong điều trị quá liều Paracetamol.`,
            `Khi nhiễm độc Paracetamol nặng, cần điều trị hỗ trợ tích cực. Cần rửa dạ dày trong trường hợp, tốt nhất trong vòng 4 giờ sau khi uống.`,
            `Liệu pháp giải độc chính là dùng những hợp chất Sulfhydry. N-acetylcystein có tác dụng khi uống hoặc tiêm tĩnh mạch.`,
            `Ngoài ra, có thể dùng Methionin, than hoạt hoặc thuốc tẩy muối.`,
            `Làm gì khi quên liều?`,
            `Nếu bạn quên một liều thuốc Hapacol Blue, hãy uống càng sớm càng tốt. Tuy nhiên, nếu gần với liều kế tiếp, hãy bỏ qua liều đã quên và uống liều kế tiếp vào thời điểm như kế hoạch. Không uống gấp đôi liều đã quy định.`
        ],
        pill_viewed: 100,
    },
]