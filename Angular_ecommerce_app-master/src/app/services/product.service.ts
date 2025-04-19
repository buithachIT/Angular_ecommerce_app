import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductItem } from '../components/types/productItem';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products : ProductItem[] = [
    { id: 1, name: 'Sách - Thuật thao túng - Góc tối ẩn sau mỗi câu nói', price: 58000, image: 'assets/image/products/image1.jpg', describe: '', quantity:1,idcategory: 116108,category:"Tâm lý" },
    { id: 2, name: 'Sách - Đứa trẻ hiểu chuyện thường không có kẹo ăn', price: 91760, image: 'assets/image/products/image2.jpg', describe: '', quantity:1,idcategory: 116108,category:"Tâm lý" },
    { id: 3, name: 'Sách - Thao túng tâm lý đám đông', price: 89000, image: 'assets/image/products/image3.jpg', describe: '', quantity:1,idcategory: 116108,category:"Tâm lý" },
    { id: 4, name: 'Sách - Bạn không thông minh lắm đâu', price: 97300, image: 'assets/image/products/image4.jpg', describe: '', quantity:1,idcategory: 107110,category:" Kỹ năng sống" },
    { id: 5, name: 'Sách - Đừng chọn lựa thư nhàn lúc còn trẻ', price: 76300, image: 'assets/image/products/image5.jpg', describe: '', quantity:1,idcategory: 107110,category:" Kỹ năng sống" },
    { id: 6, name: 'Sách - Quân vương thuật cai trị', price: 79000, image: 'assets/image/products/image6.jpg', describe: '', quantity:1,idcategory: 101161,category:"Triết Học- Lý Luận Chính Trị" },
    { id: 7, name: 'Sách - Phân tách tâm trạng học phạm tội', price: 94000, image: 'assets/image/products/image7.jpg', describe: 'Cuốn sách đi sâu vào việc phân tích tâm lý học tội phạm dưới nhiều góc độ: phân tâm học, hành vi học, và khoa học thần kinh. Người đọc sẽ khám phá sự khác biệt trong tâm lý của các loại tội phạm như bạo lực, tình dục, thanh thiếu niên, nữ giới, tội phạm có tổ chức và biến thái.<br>Sách cũng giới thiệu các kỹ thuật chuyên dụng trong ngành như: phát hiện nói dối, lập hồ sơ tâm lý, thẩm vấn tâm lý và đánh giá nhân chứng.<br>Thông qua việc thấu hiểu động cơ, nhân cách và nội tâm của người phạm tội, cuốn sách mở ra hướng tiếp cận mới trong việc phòng ngừa, can thiệp và cải tạo hành vi phạm pháp một cách hiệu quả.', quantity:1,idcategory: 116108,category:"Tâm lý" },
    { id: 8, name: 'Sách - Sĩ số lớp vắng 0', price: 59000, image: 'assets/image/products/image8.jpg', describe: '', quantity:1,idcategory:101181,category:"Văn học" },
    { id: 9, name: 'Sách - Không Phải Sói Nhưng Cũng Đừng Là Cừu', price: 55000, image: 'assets/image/products/image9.jpg', describe: 'Không Phải Sói Nhưng Cũng Đừng Là Cừu là cuốn sách của Lê Bảo Ngọc giúp bạn nhìn rõ ranh giới mong manh giữa đúng và sai, tốt và xấu. Thông qua những câu hỏi thực tế, tranh cãi, tác giả dẫn dắt bạn khám phá nội tâm, đánh giá lại tư duy cá nhân và giải phóng bản thân khỏi định kiến xã hội. Cuốn sách là lời nhắc rằng: bạn không cần trở thành sói, nhưng cũng đừng sống như một con cừu.', quantity:1,idcategory: 107110115,category:" Kỹ năng sống" },
    { id: 10, name: 'Sách - Cây Cam Ngọt Của Tôi', price: 54000, image: 'assets/image/products/image10.jpg', describe: '', quantity:1,idcategory:101181,category:"Văn học" },
    { id: 11, name: 'Sách - Trốn Lên Mái Nhà Để Khóc', price: 47500, image: 'assets/image/products/image11.jpg', describe: '', quantity:1,idcategory:101181,category:"Văn học" },
    { id: 12, name: 'Sách - Thưa Ngoại Con Mới Về', price: 59000, image: 'assets/image/products/image12.jpg', describe: '', quantity:1,idcategory:101181,category:"Văn học" },
    { id: 13, name: 'Sách - Ghi Chép Pháp Y - Những Cái Chết Bí Ẩn', price: 123000, image: 'assets/image/products/image13.jpg', describe: '', quantity:1,idcategory:101181,category:"Văn học" },
    { id: 14, name: 'Sách - Nơi Nào Có Mẹ, Nơi Ấy Là Nhà', price: 49000, image: 'assets/image/products/image14.jpg', describe: '', quantity:1,idcategory:101181,category:"Văn học" },
    { id: 15, name: 'Sách - Lén Nhặt Chuyện Đời - Mộc Trầm', price: 89000, image: 'assets/image/products/image15.jpg', describe: '', quantity: 1,idcategory:101181,category:"Văn học" },
  ];

  constructor() {}

  getProducts(): Observable<ProductItem[]> {
    return of(this.products);
  }

  getProductById(id: number): Observable<ProductItem | undefined> {
    return of(this.products.find(p => p.id === id));
  }

  getProductsByCategory(idcategory: number): Observable<ProductItem[]> {
    return of(this.products.filter(p => p.idcategory === idcategory));
  }
}