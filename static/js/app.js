/**
 * EDUPRO ENTERPRISE - APPLICATION ENGINE (UI/UX PRO MAX)
 * 3-Tier Role-Based Access Control: Admin | Teacher | Student
 */

// Initial Seed Data with Real-world Academic Records
const INITIAL_DATA = {
  users: [
    {
      id: "u_admin_1",
      username: "admin",
      password: "123",
      role: "admin",
      fullname: "TS. Nguyễn Hoàng Nam",
      code: "AD001",
      email: "nam.nh@university.edu.vn",
      phone: "0901 234 567",
      department: "Phòng Quản lý Đào tạo",
      title: "Trưởng phòng Đào tạo",
      age: 42,
      status: "active"
    },
    {
      id: "u_teacher_1",
      username: "teacher1",
      password: "123",
      role: "teacher",
      fullname: "ThS. Lê Thị Mai",
      code: "GV001",
      email: "mai.lt@university.edu.vn",
      phone: "0912 345 678",
      department: "Công nghệ thông tin",
      title: "Giảng viên chính",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80",
      age: 36,
      status: "active"
    },
    {
      id: "u_teacher_2",
      username: "teacher2",
      password: "123",
      role: "teacher",
      fullname: "TS. Trần Quốc Bảo",
      code: "GV002",
      email: "bao.tq@university.edu.vn",
      phone: "0988 765 432",
      department: "Khoa học máy tính",
      title: "Phó chủ nhiệm bộ môn",
      age: 40,
      status: "active"
    },
    {
      id: "u_student_1",
      username: "student1",
      password: "123",
      role: "student",
      fullname: "Nguyễn Văn An",
      code: "SV2026001",
      email: "an.nv@student.edu.vn",
      phone: "0345 678 901",
      department: "Công nghệ thông tin",
      title: "Sinh viên Khóa K66",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=80",
      age: 20,
      classGroup: "CNTT1-K66",
      status: "active"
    },
    {
      id: "u_student_2",
      username: "student2",
      password: "123",
      role: "student",
      fullname: "Trần Thị Bích",
      code: "SV2026002",
      email: "bich.tt@student.edu.vn",
      phone: "0356 789 012",
      department: "Hệ thống thông tin",
      title: "Sinh viên Khóa K66",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=80",
      age: 20,
      classGroup: "HTTT-K66",
      status: "active"
    },
    {
      id: "u_student_3",
      username: "student3",
      password: "123",
      role: "student",
      fullname: "Phạm Quốc Cường",
      code: "SV2026003",
      email: "cuong.pq@student.edu.vn",
      phone: "0367 890 123",
      department: "Khoa học máy tính",
      title: "Sinh viên Khóa K66",
      age: 20,
      classGroup: "KHMT-K66",
      status: "active"
    }
  ],

  courses: [
    {
      id: "c_1",
      code: "INT3306",
      name: "Phát triển Ứng dụng Web Hiện đại",
      credits: 3,
      department: "Công nghệ thông tin",
      pricePerCredit: 450000,
      semester: "Học kỳ 1 - 2026",
      description: "Học kiến trúc Single Page Apps, RESTful APIs, State Management, Glassmorphism UI.",
      gradeStartDate: "2026-09-15",
      gradeEndDate: "2026-10-20",
      gradeLocked: false
    },
    {
      id: "c_2",
      code: "INT2204",
      name: "Cơ sở Dữ liệu & Hệ Quản trị CSDL",
      credits: 4,
      department: "Hệ thống thông tin",
      pricePerCredit: 450000,
      semester: "Học kỳ 1 - 2026",
      description: "Thiết kế mô hình quan hệ ER, truy vấn SQL nâng cao, indexing và tối ưu hóa hiệu năng.",
      gradeStartDate: "2026-09-20",
      gradeEndDate: "2026-10-25",
      gradeLocked: false
    },
    {
      id: "c_3",
      code: "INT3110",
      name: "Cấu trúc Dữ liệu & Giải thuật Nâng cao",
      credits: 3,
      department: "Khoa học máy tính",
      pricePerCredit: 450000,
      semester: "Học kỳ 1 - 2026",
      description: "Cây cân bằng, đồ thị, quy hoạch động và phân tích độ phức tạp thuật toán.",
      gradeStartDate: "2026-09-10",
      gradeEndDate: "2026-10-15",
      gradeLocked: false
    },
    {
      id: "c_4",
      code: "MAT1093",
      name: "Đại số Tuyến tính & Giải tích Ứng dụng",
      credits: 3,
      department: "Toán tin",
      pricePerCredit: 420000,
      semester: "Học kỳ 1 - 2026",
      description: "Không gian vector, ma trận biến đổi, ứng dụng trong Machine Learning và Đồ họa.",
      gradeStartDate: "2026-09-01",
      gradeEndDate: "2026-09-30",
      gradeLocked: false
    }
  ],

  schedules: [
    // Tuần 1
    {
      id: "sch_1",
      courseId: "c_1",
      courseCode: "INT3306",
      courseName: "Phát triển Ứng dụng Web Hiện đại",
      teacherId: "u_teacher_1",
      teacherName: "ThS. Lê Thị Mai",
      room: "Phòng Lab 402 - Tòa A2",
      dayOfWeek: "Thứ Hai",
      week: 1,
      startTime: "07:30",
      endTime: "10:30"
    },
    {
      id: "sch_2",
      courseId: "c_2",
      courseCode: "INT2204",
      courseName: "Cơ sở Dữ liệu & Hệ Quản trị CSDL",
      teacherId: "u_teacher_2",
      teacherName: "TS. Trần Quốc Bảo",
      room: "Phòng Lý thuyết 301 - Tòa B1",
      dayOfWeek: "Thứ Tư",
      week: 1,
      startTime: "13:30",
      endTime: "16:30"
    },
    {
      id: "sch_3",
      courseId: "c_3",
      courseCode: "INT3110",
      courseName: "Cấu trúc Dữ liệu & Giải thuật Nâng cao",
      teacherId: "u_teacher_1",
      teacherName: "ThS. Lê Thị Mai",
      room: "Phòng 204 - Tòa A1",
      dayOfWeek: "Thứ Sáu",
      week: 1,
      startTime: "09:30",
      endTime: "11:30"
    },
    // Tuần 2
    {
      id: "sch_4",
      courseId: "c_1",
      courseCode: "INT3306",
      courseName: "Phát triển Ứng dụng Web Hiện đại",
      teacherId: "u_teacher_1",
      teacherName: "ThS. Lê Thị Mai",
      room: "Phòng Lab 402 - Tòa A2",
      dayOfWeek: "Thứ Hai",
      week: 2,
      startTime: "07:30",
      endTime: "10:30"
    },
    {
      id: "sch_5",
      courseId: "c_2",
      courseCode: "INT2204",
      courseName: "Cơ sở Dữ liệu & Hệ Quản trị CSDL",
      teacherId: "u_teacher_2",
      teacherName: "TS. Trần Quốc Bảo",
      room: "Phòng Lý thuyết 301 - Tòa B1",
      dayOfWeek: "Thứ Tư",
      week: 2,
      startTime: "13:30",
      endTime: "16:30"
    },
    {
      id: "sch_6",
      courseId: "c_3",
      courseCode: "INT3110",
      courseName: "Cấu trúc Dữ liệu & Giải thuật Nâng cao",
      teacherId: "u_teacher_1",
      teacherName: "ThS. Lê Thị Mai",
      room: "Phòng 204 - Tòa A1",
      dayOfWeek: "Thứ Sáu",
      week: 2,
      startTime: "09:30",
      endTime: "11:30"
    },
    // Tuần 3
    {
      id: "sch_7",
      courseId: "c_1",
      courseCode: "INT3306",
      courseName: "Phát triển Ứng dụng Web Hiện đại",
      teacherId: "u_teacher_1",
      teacherName: "ThS. Lê Thị Mai",
      room: "Phòng Lab 402 - Tòa A2",
      dayOfWeek: "Thứ Hai",
      week: 3,
      startTime: "07:30",
      endTime: "10:30"
    },
    {
      id: "sch_8",
      courseId: "c_2",
      courseCode: "INT2204",
      courseName: "Cơ sở Dữ liệu & Hệ Quản trị CSDL",
      teacherId: "u_teacher_2",
      teacherName: "TS. Trần Quốc Bảo",
      room: "Phòng Lý thuyết 301 - Tòa B1",
      dayOfWeek: "Thứ Tư",
      week: 3,
      startTime: "13:30",
      endTime: "16:30"
    },
    // Tuần 4
    {
      id: "sch_9",
      courseId: "c_3",
      courseCode: "INT3110",
      courseName: "Cấu trúc Dữ liệu & Giải thuật Nâng cao",
      teacherId: "u_teacher_1",
      teacherName: "ThS. Lê Thị Mai",
      room: "Phòng 204 - Tòa A1",
      dayOfWeek: "Thứ Sáu",
      week: 4,
      startTime: "09:30",
      endTime: "11:30"
    }
  ],

  enrollments: [
    // Sinh viên 1: Nguyễn Văn An
    {
      id: "en_1",
      studentId: "u_student_1",
      courseId: "c_1",
      midtermScore: 8.5,
      finalScore: 9.0,
      attendanceScore: 10,
      notes: "Hăng hái phát biểu, bài tập lớn xuất sắc",
      tuitionPaid: true
    },
    {
      id: "en_2",
      studentId: "u_student_1",
      courseId: "c_2",
      midtermScore: 7.5,
      finalScore: 8.0,
      attendanceScore: 9.5,
      notes: "Nắm vững lý thuyết cơ sở dữ liệu và SQL",
      tuitionPaid: true
    },
    {
      id: "en_3",
      studentId: "u_student_1",
      courseId: "c_3",
      midtermScore: 9.0,
      finalScore: 8.5,
      attendanceScore: 10,
      notes: "Tư duy thuật toán và cấu trúc cây rất tốt",
      tuitionPaid: true
    },
    {
      id: "en_4",
      studentId: "u_student_1",
      courseId: "c_4",
      midtermScore: 8.0,
      finalScore: 8.5,
      attendanceScore: 9.0,
      notes: "Hoàn thành tốt đồ án mô hình phân loại ảnh",
      tuitionPaid: true
    },
    {
      id: "en_5",
      studentId: "u_student_1",
      courseId: "c_5",
      midtermScore: 8.5,
      finalScore: 8.0,
      attendanceScore: 9.5,
      notes: "Thực hành cấu hình mạng thành thạo",
      tuitionPaid: true
    },

    // Sinh viên 2: Trần Thị Bích
    {
      id: "en_6",
      studentId: "u_student_2",
      courseId: "c_1",
      midtermScore: 9.0,
      finalScore: 9.5,
      attendanceScore: 10,
      notes: "Giao diện bài tập thực hành rất đẹp, chỉn chu",
      tuitionPaid: true
    },
    {
      id: "en_7",
      studentId: "u_student_2",
      courseId: "c_2",
      midtermScore: 8.0,
      finalScore: 8.5,
      attendanceScore: 10,
      notes: "Thiết kế CSDL chuẩn hóa tốt",
      tuitionPaid: true
    },
    {
      id: "en_8",
      studentId: "u_student_2",
      courseId: "c_3",
      midtermScore: 8.5,
      finalScore: 8.0,
      attendanceScore: 9.0,
      notes: "Nắm chắc các giải thuật đệ quy & quy hoạch động",
      tuitionPaid: true
    },
    {
      id: "en_9",
      studentId: "u_student_2",
      courseId: "c_6",
      midtermScore: 9.5,
      finalScore: 9.0,
      attendanceScore: 10,
      notes: "App mobile responsive đẹp, trải nghiệm mượt",
      tuitionPaid: true
    },

    // Sinh viên 3: Phạm Quốc Cường
    {
      id: "en_10",
      studentId: "u_student_3",
      courseId: "c_1",
      midtermScore: 7.0,
      finalScore: 7.5,
      attendanceScore: 8.5,
      notes: "Cần chú ý responsive và styling giao diện",
      tuitionPaid: true
    },
    {
      id: "en_11",
      studentId: "u_student_3",
      courseId: "c_2",
      midtermScore: 6.5,
      finalScore: 7.0,
      attendanceScore: 8.0,
      notes: "Cần cải thiện câu truy vấn lồng SQL",
      tuitionPaid: false
    },
    {
      id: "en_12",
      studentId: "u_student_3",
      courseId: "c_4",
      midtermScore: 7.5,
      finalScore: 8.0,
      attendanceScore: 9.0,
      notes: "Hiểu tốt kiến trúc mạng nơ-ron cơ bản",
      tuitionPaid: true
    },
    {
      id: "en_13",
      studentId: "u_student_3",
      courseId: "c_5",
      midtermScore: 8.0,
      finalScore: 7.5,
      attendanceScore: 9.0,
      notes: "Đạt yêu cầu bài thực hành an ninh mạng",
      tuitionPaid: false
    }
  ],

  attendance: [
    {
      id: "att_1",
      scheduleId: "sch_1",
      date: "2026-09-29",
      records: [
        { studentId: "u_student_1", status: "present", note: "" },
        { studentId: "u_student_2", status: "late", note: "Kẹt xe 15p" }
      ]
    }
  ]
};

// State Store Manager
class AppStore {
  constructor() {
    this.storageKey = "SMS_ENTERPRISE_DB_V3";
    this.currentUserKey = "SMS_CURRENT_USER_V3";
    this.themeKey = "SMS_THEME_MODE_V3";
    this.init();
  }

  init() {
    const savedData = localStorage.getItem(this.storageKey);
    if (!savedData) {
      this.data = JSON.parse(JSON.stringify(INITIAL_DATA));
      this.save();
    } else {
      try {
        this.data = JSON.parse(savedData);
        // Ensure multi-week schedule data exists
        if (!this.data.schedules || this.data.schedules.length < 6) {
          this.data.schedules = JSON.parse(JSON.stringify(INITIAL_DATA.schedules));
          this.save();
        }

        // Ensure rich enrollments exist for all students
        if (!this.data.enrollments || this.data.enrollments.length < 8) {
          this.data.enrollments = JSON.parse(JSON.stringify(INITIAL_DATA.enrollments));
          this.save();
        }

        // Ensure default student and teacher avatars exist
        INITIAL_DATA.users.forEach(initU => {
          if (initU.avatar) {
            const curU = this.data.users.find(u => u.id === initU.id);
            if (curU && !curU.avatar) {
              curU.avatar = initU.avatar;
            }
          }
        });
        this.save();
      } catch (e) {
        this.data = JSON.parse(JSON.stringify(INITIAL_DATA));
        this.save();
      }
    }

    const savedUser = localStorage.getItem(this.currentUserKey);
    this.currentUser = savedUser ? JSON.parse(savedUser) : null;
  }

  async syncFromFirebase() {
    if (typeof firebaseService !== 'undefined' && firebaseService.isConfigured) {
      const cloudData = await firebaseService.fetchAllData();
      if (cloudData && cloudData.users) {
        this.data = {
          users: Array.isArray(cloudData.users) ? cloudData.users : Object.values(cloudData.users || {}),
          courses: Array.isArray(cloudData.courses) ? cloudData.courses : Object.values(cloudData.courses || {}),
          schedules: Array.isArray(cloudData.schedules) ? cloudData.schedules : Object.values(cloudData.schedules || {}),
          enrollments: Array.isArray(cloudData.enrollments) ? cloudData.enrollments : Object.values(cloudData.enrollments || {}),
          attendance: Array.isArray(cloudData.attendance) ? cloudData.attendance : Object.values(cloudData.attendance || {})
        };
        localStorage.setItem(this.storageKey, JSON.stringify(this.data));
        if (typeof app !== 'undefined' && app.refreshActiveView) {
          app.refreshActiveView();
        }
      }
    }
  }

  save() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.data));
    if (typeof firebaseService !== 'undefined' && firebaseService.isConfigured) {
      firebaseService.saveData(this.data);
    }
  }

  setCurrentUser(user) {
    this.currentUser = user;
    if (user) {
      localStorage.setItem(this.currentUserKey, JSON.stringify(user));
    } else {
      localStorage.removeItem(this.currentUserKey);
    }
  }
}

const store = new AppStore();

// Main Application Controller
const app = {
  activeSection: 'dashboard',
  adminRoleFilter: 'all',

  init() {
    this.initTheme();
    this.bindEvents();
    store.syncFromFirebase();
    if (store.currentUser) {
      this.renderAppForUser(store.currentUser);
    } else {
      this.showLogin();
    }
  },

  refreshActiveView() {
    if (store.currentUser && this.activeSection) {
      this.switchSection(this.activeSection);
    }
  },

  initTheme() {
    const savedTheme = localStorage.getItem(store.themeKey) || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) {
      themeIcon.className = savedTheme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }
  },

  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem(store.themeKey, nextTheme);
    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) {
      themeIcon.className = nextTheme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }
    this.toast('success', `Đã chuyển sang giao diện ${nextTheme === 'dark' ? 'Tối' : 'Sáng'}`);
  },

  bindEvents() {
    const menuBtn = document.getElementById('sidebar-toggle-btn');
    if (menuBtn) {
      menuBtn.onclick = (e) => {
        if (e) e.preventDefault();
        this.toggleSidebar();
      };
    }
  },

  toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.querySelector('.main-content');
    const overlay = document.getElementById('sidebar-overlay');
    if (!sidebar) return;

    if (window.innerWidth <= 1024) {
      const isOpen = sidebar.classList.toggle('open');
      if (overlay) {
        if (isOpen) overlay.classList.add('show');
        else overlay.classList.remove('show');
      }
    } else {
      sidebar.classList.toggle('collapsed');
      if (mainContent) {
        mainContent.classList.toggle('expanded');
      }
    }
  },

  toast(type, message) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toastEl = document.createElement('div');
    toastEl.className = `toast ${type}`;
    
    let iconClass = 'fa-circle-check';
    if (type === 'error') iconClass = 'fa-circle-xmark';
    if (type === 'warning') iconClass = 'fa-triangle-exclamation';
    if (type === 'info') iconClass = 'fa-circle-info';

    toastEl.innerHTML = `
      <i class="fa-solid ${iconClass}" style="font-size:16px;"></i>
      <div style="flex:1;">${message}</div>
      <button onclick="this.parentElement.remove()" style="background:none;border:none;color:var(--text-muted);cursor:pointer;">&times;</button>
    `;

    container.appendChild(toastEl);
    setTimeout(() => {
      if (toastEl.parentElement) {
        toastEl.style.opacity = '0';
        toastEl.style.transform = 'translateX(40px)';
        setTimeout(() => toastEl.remove(), 250);
      }
    }, 3500);
  },

  quickLogin(role) {
    const targetUser = store.data.users.find(u => u.role === role);
    if (targetUser) {
      store.setCurrentUser(targetUser);
      this.toast('success', `Đăng nhập thành công: ${targetUser.fullname} (${this.getRoleName(targetUser.role)})`);
      this.renderAppForUser(targetUser);
    }
  },

  handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value.trim();

    const user = store.data.users.find(u => u.username === username && u.password === password);
    if (!user) {
      this.toast('error', 'Tên đăng nhập hoặc mật khẩu không chính xác!');
      return;
    }

    if (user.status === 'locked') {
      this.toast('error', 'Tài khoản này đã bị khóa. Vui lòng liên hệ Quản trị viên!');
      return;
    }

    store.setCurrentUser(user);
    this.toast('success', `Chào mừng ${user.fullname} trở lại hệ thống!`);
    this.renderAppForUser(user);
  },

  logout() {
    store.setCurrentUser(null);
    this.toast('info', 'Bạn đã đăng xuất');
    this.showLogin();
  },

  showLogin() {
    document.getElementById('auth-section').style.display = 'flex';
    document.getElementById('app-layout').style.display = 'none';
  },

  renderAppForUser(user) {
    document.getElementById('auth-section').style.display = 'none';
    document.getElementById('app-layout').style.display = 'flex';

    // Sidebar User
    const avatar = document.getElementById('user-avatar-text');
    const nameEl = document.getElementById('user-display-name');
    const roleBadge = document.getElementById('user-role-badge');
    
    if (avatar) {
      if (user.avatar) {
        avatar.innerHTML = `<img src="${user.avatar}" alt="${user.fullname}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">`;
      } else {
        const initials = user.fullname.split(' ').pop().charAt(0).toUpperCase();
        avatar.innerText = initials;
      }
    }
    if (nameEl) nameEl.innerText = user.fullname;
    if (roleBadge) {
      roleBadge.innerText = this.getRoleName(user.role);
      roleBadge.className = `badge-role badge-${user.role}`;
    }

    this.renderNavMenu(user.role);

    // Set role-specific default landing view
    if (user.role === 'admin') {
      this.switchSection('dashboard');
    } else if (user.role === 'teacher') {
      this.switchSection('schedule');
    } else if (user.role === 'student') {
      this.switchSection('schedule');
    }
  },

  getRoleName(role) {
    if (role === 'admin') return 'Quản Trị Viên';
    if (role === 'teacher') return 'Giảng Viên';
    if (role === 'student') return 'Sinh Viên';
    return role;
  },

  renderNavMenu(role) {
    const menuEl = document.getElementById('nav-menu');
    let html = '';

    // 1. ADMIN MENU ONLY
    if (role === 'admin') {
      html += `
        <div class="menu-category">Quản Trị Hệ Thống</div>
        <li class="nav-link active" onclick="app.switchSection('dashboard')">
          <i class="fa-solid fa-chart-pie"></i>
          <span>Bảng Điều Khiển</span>
        </li>
        <li class="nav-link" onclick="app.switchSection('admin-users')">
          <i class="fa-solid fa-user-shield"></i>
          <span>Phân Quyền & Tài Khoản</span>
        </li>
        <li class="nav-link" onclick="app.switchSection('admin-courses')">
          <i class="fa-solid fa-book-bookmark"></i>
          <span>Môn Học & Lịch Dạy</span>
        </li>
        <div class="menu-category">Đào Tạo & Học Tập</div>
        <li class="nav-link" onclick="app.switchSection('students-list')">
          <i class="fa-solid fa-users"></i>
          <span>Danh Sách Sinh Viên</span>
        </li>
        <li class="nav-link" onclick="app.switchSection('schedule')">
          <i class="fa-solid fa-calendar-days"></i>
          <span>Thời Khóa Biểu</span>
        </li>
        <li class="nav-link" onclick="app.switchSection('grading')">
          <i class="fa-solid fa-file-pen"></i>
          <span>Quản Lý Điểm Số</span>
        </li>
        <div class="menu-category">Cá Nhân</div>
        <li class="nav-link" onclick="app.switchSection('profile')">
          <i class="fa-solid fa-id-badge"></i>
          <span>Hồ Sơ Cá Nhân</span>
        </li>
      `;
    }

    // 2. TEACHER MENU ONLY (NO Admin Dashboard)
    else if (role === 'teacher') {
      html += `
        <div class="menu-category">Giảng Dạy & Lớp Học</div>
        <li class="nav-link active" onclick="app.switchSection('schedule')">
          <i class="fa-solid fa-calendar-days"></i>
          <span>Lịch Dạy Trong Tuần</span>
        </li>
        <li class="nav-link" onclick="app.switchSection('students-list')">
          <i class="fa-solid fa-users"></i>
          <span>Danh Sách Sinh Viên</span>
        </li>
        <li class="nav-link" onclick="app.switchSection('attendance')">
          <i class="fa-solid fa-clipboard-user"></i>
          <span>Điểm Danh Chuyên Cần</span>
        </li>
        <li class="nav-link" onclick="app.switchSection('grading')">
          <i class="fa-solid fa-file-pen"></i>
          <span>Sổ Điểm Môn Học</span>
        </li>
        <div class="menu-category">Tài Khoản</div>
        <li class="nav-link" onclick="app.switchSection('profile')">
          <i class="fa-solid fa-id-badge"></i>
          <span>Hồ Sơ Giảng Viên</span>
        </li>
      `;
    }

    // 3. STUDENT MENU ONLY (NO Admin Dashboard)
    else if (role === 'student') {
      html += `
        <div class="menu-category">Học Tập & Đào Tạo</div>
        <li class="nav-link active" onclick="app.switchSection('schedule')">
          <i class="fa-solid fa-calendar-days"></i>
          <span>Thời Khóa Biểu Cá Nhân</span>
        </li>
        <li class="nav-link" onclick="app.switchSection('registration')">
          <i class="fa-solid fa-folder-plus"></i>
          <span>Đăng Ký Học Phần</span>
        </li>
        <li class="nav-link" onclick="app.switchSection('my-grades')">
          <i class="fa-solid fa-award"></i>
          <span>Kết Quả Học Tập</span>
        </li>
        <li class="nav-link" onclick="app.switchSection('tuition')">
          <i class="fa-solid fa-wallet"></i>
          <span>Tra Cứu Học Phí</span>
        </li>
        <div class="menu-category">Tài Khoản</div>
        <li class="nav-link" onclick="app.switchSection('profile')">
          <i class="fa-solid fa-id-badge"></i>
          <span>Hồ Sơ Sinh Viên</span>
        </li>
      `;
    }

    menuEl.innerHTML = html;
  },

  switchSection(sectionId) {
    this.activeSection = sectionId;

    const links = document.querySelectorAll('.nav-link');
    links.forEach(l => l.classList.remove('active'));
    links.forEach(l => {
      if (l.getAttribute('onclick') && l.getAttribute('onclick').includes(sectionId)) {
        l.classList.add('active');
      }
    });

    const sidebar = document.getElementById('sidebar');
    if (sidebar) sidebar.classList.remove('open');
    const overlay = document.getElementById('sidebar-overlay');
    if (overlay) overlay.classList.remove('show');

    const sections = document.querySelectorAll('.content-view');
    sections.forEach(s => s.style.display = 'none');

    const target = document.getElementById(`view-${sectionId}`);
    if (target) target.style.display = 'block';

    this.updateHeaderTitle(sectionId);

    switch (sectionId) {
      case 'dashboard': this.renderDashboard(); break;
      case 'profile': this.renderProfile(); break;
      case 'students-list': this.loadStudentList(); break;
      case 'schedule': this.loadScheduleView(); break;
      case 'attendance': this.loadAttendanceView(); break;
      case 'grading': this.loadGradingView(); break;
      case 'registration': this.loadRegistrationView(); break;
      case 'my-grades': this.loadMyGradesView(); break;
      case 'tuition': this.loadTuitionView(); break;
      case 'admin-users': this.loadAdminUsersView(); break;
      case 'admin-courses': this.loadAdminCoursesView(); break;
    }
  },

  updateHeaderTitle(sectionId) {
    const titles = {
      dashboard: ['Tổng Quan Hệ Thống', 'Thống kê hoạt động đào tạo và kết quả học tập'],
      profile: ['Hồ Sơ Cá Nhân', 'Quản lý và cập nhật thông tin tài khoản'],
      'students-list': ['Danh Sách Sinh Viên', 'Tra cứu danh sách hồ sơ sinh viên'],
      schedule: ['Thời Khóa Biểu', 'Lịch học tập và giảng dạy theo tuần'],
      attendance: ['Điểm Danh Chuyên Cần', 'Theo dõi và chấm chuyên cần sinh viên'],
      grading: [store.currentUser?.role === 'admin' ? 'Quản Lý Điểm Số Toàn Trường' : 'Sổ Điểm Môn Học', store.currentUser?.role === 'admin' ? 'Tra cứu, điều chỉnh điểm và kết quả học tập của tất cả sinh viên' : 'Quản lý và cập nhật điểm số môn học phụ trách'],
      registration: ['Đăng Ký Học Phần', 'Cổng đăng ký tín chỉ mở trong kỳ'],
      'my-grades': ['Kết Quả Học Tập', 'Tra cứu bảng điểm chi tiết và GPA'],
      tuition: ['Cổng Học Phí', 'Tra cứu thông tin học phí và biên lai'],
      'admin-users': ['Quản Lý Tài Khoản & Phân Quyền', 'Thêm, sửa, cấp quyền và quản lý tài khoản người dùng'],
      'admin-courses': ['Môn Học & Lịch Dạy', 'Quản lý danh mục đào tạo và phân công giảng dạy']
    };

    const [heading, sub] = titles[sectionId] || ['Hệ Thống Đào Tạo', 'Quản lý sinh viên'];
    document.getElementById('page-heading').innerText = heading;
    document.getElementById('page-subheading').innerText = sub;
  },

  /* -------------------------------------------------------------
     DASHBOARD SECTION
  -------------------------------------------------------------- */
  renderDashboard() {
    const user = store.currentUser;
    const teachers = store.data.users.filter(u => u.role === 'teacher').length;
    const students = store.data.users.filter(u => u.role === 'student').length;
    const courses = store.data.courses.length;
    const schedules = store.data.schedules.length;

    document.getElementById('stat-teachers').innerText = teachers;
    document.getElementById('stat-students').innerText = students;
    document.getElementById('stat-courses').innerText = courses;
    document.getElementById('stat-schedules').innerText = schedules;

    document.getElementById('welcome-title').innerText = `Xin chào, ${user.fullname}!`;
    document.getElementById('welcome-sub').innerText = user.role === 'admin' 
      ? 'Hệ thống phân quyền đang hoạt động với đầy đủ quyền quản trị đào tạo.' 
      : (user.role === 'teacher' ? 'Bạn có thể kiểm tra lịch giảng dạy, điểm danh và sổ điểm các môn phụ trách.' : 'Xem thời khóa biểu, tiến độ học tập và đăng ký các môn học trong kỳ.');

    this.renderDashboardChart();
  },

  renderDashboardChart() {
    const canvas = document.getElementById('dash-chart-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
    
    // Dynamic color palette
    const palette = [
      '#f97316', // Flame Orange
      '#3b82f6', // Ocean Blue
      '#10b981', // Emerald Green
      '#8b5cf6', // Purple Violet
      '#f59e0b', // Warm Amber
      '#06b6d4', // Cyan
      '#ec4899', // Rose Pink
      '#6366f1'  // Indigo
    ];

    // Aggregate courses count dynamically by department
    const deptCounts = {};
    (store.data.courses || []).forEach(c => {
      const dept = c.department || 'Chung';
      deptCounts[dept] = (deptCounts[dept] || 0) + 1;
    });

    const entries = Object.entries(deptCounts);
    const totalCourses = entries.reduce((sum, [, count]) => sum + count, 0);

    if (totalCourses === 0) {
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = '13px Inter';
      ctx.fillStyle = isDark ? '#94a3b8' : '#64748b';
      ctx.fillText('Chưa có dữ liệu môn học', canvas.width / 2, canvas.height / 2);
      return;
    }

    const data = entries.map(([dept, count], idx) => ({
      label: dept,
      count,
      percent: Math.round((count / totalCourses) * 100),
      color: palette[idx % palette.length]
    }));

    // Draw Donut Chart
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const outerRadius = 88;
    const innerRadius = 54;
    let currentAngle = -Math.PI / 2; // Start from top 12 o'clock

    data.forEach(item => {
      const sliceAngle = (item.count / totalCourses) * (2 * Math.PI);
      const endAngle = currentAngle + sliceAngle;

      ctx.beginPath();
      // Leave tiny 0.03 rad gap between slices for modern luxury look
      ctx.arc(centerX, centerY, outerRadius, currentAngle, endAngle - (data.length > 1 ? 0.03 : 0));
      ctx.arc(centerX, centerY, innerRadius, endAngle - (data.length > 1 ? 0.03 : 0), currentAngle, true);
      ctx.closePath();
      ctx.fillStyle = item.color;
      ctx.fill();

      currentAngle = endAngle;
    });

    // Center Donut Text Summary
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = '11px Inter';
    ctx.fillStyle = isDark ? '#94a3b8' : '#64748b';
    ctx.fillText('Tổng số môn', centerX, centerY - 10);

    ctx.font = 'bold 20px Plus Jakarta Sans';
    ctx.fillStyle = isDark ? '#fff7ed' : '#0f172a';
    ctx.fillText(`${totalCourses}`, centerX, centerY + 12);

    // Render Side Legend List
    const legendEl = document.getElementById('dash-chart-legend');
    if (legendEl) {
      legendEl.innerHTML = data.map(item => `
        <div style="display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 7px 12px; border-radius: var(--radius-sm); background: var(--bg-subtle); border: 1px solid var(--border-subtle); transition: transform 0.15s ease;" onmouseover="this.style.transform='translateX(4px)'" onmouseout="this.style.transform='none'">
          <div style="display: flex; align-items: center; gap: 10px; min-width: 0;">
            <div style="width: 12px; height: 12px; border-radius: 3px; background: ${item.color}; flex-shrink: 0; box-shadow: 0 0 6px ${item.color}66;"></div>
            <span style="font-size: 13px; font-weight: 600; color: var(--text-main); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${item.label}</span>
          </div>
          <div style="display: flex; align-items: center; gap: 8px; flex-shrink: 0;">
            <span style="font-size: 12.5px; font-weight: 700; color: var(--text-muted);">${item.count} môn</span>
            <span class="badge-role" style="background: rgba(249, 115, 22, 0.12); color: var(--primary); font-size: 11px; padding: 1px 6px; font-weight: 700;">${item.percent}%</span>
          </div>
        </div>
      `).join('');
    }
  },

  /* -------------------------------------------------------------
     PROFILE SECTION & AVATAR UPLOAD (All 3 Roles)
  -------------------------------------------------------------- */
  renderProfile() {
    const user = store.currentUser;
    const avatarImg = document.getElementById('profile-avatar-img');
    const avatarInitials = document.getElementById('profile-avatar-initials');
    const btnRemove = document.getElementById('btn-remove-avatar');

    if (user.avatar) {
      if (avatarImg) {
        avatarImg.src = user.avatar;
        avatarImg.style.display = 'block';
      }
      if (avatarInitials) avatarInitials.style.display = 'none';
      if (btnRemove) btnRemove.style.display = 'inline-flex';
    } else {
      if (avatarImg) {
        avatarImg.src = '';
        avatarImg.style.display = 'none';
      }
      if (avatarInitials) {
        avatarInitials.innerText = user.fullname ? user.fullname.split(' ').pop().charAt(0).toUpperCase() : 'U';
        avatarInitials.style.display = 'block';
      }
      if (btnRemove) btnRemove.style.display = 'none';
    }

    document.getElementById('profile-name-text').innerText = user.fullname;
    const codeEl = document.getElementById('profile-code-text');
    if (codeEl) codeEl.innerText = user.code ? `Mã: ${user.code}` : '';

    const rBadge = document.getElementById('profile-role-text');
    rBadge.innerText = this.getRoleName(user.role);
    rBadge.className = `badge-role badge-${user.role}`;

    document.getElementById('prof-fullname').value = user.fullname || '';
    document.getElementById('prof-title').value = user.title || '';
    document.getElementById('prof-age').value = user.age || '';
    document.getElementById('prof-department').value = user.department || '';
    document.getElementById('prof-email').value = user.email || '';
    document.getElementById('prof-phone').value = user.phone || '';
  },

  handleAvatarUpload(event) {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      this.toast('error', 'Kích thước ảnh quá lớn! Vui lòng chọn ảnh dưới 5MB.');
      event.target.value = '';
      return;
    }

    if (!file.type.startsWith('image/')) {
      this.toast('error', 'Vui lòng chọn file hình ảnh hợp lệ (PNG, JPG, JPEG, WEBP)!');
      event.target.value = '';
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const base64 = e.target.result;
      const user = store.currentUser;
      user.avatar = base64;

      const idx = store.data.users.findIndex(u => u.id === user.id);
      if (idx !== -1) {
        store.data.users[idx].avatar = base64;
        store.save();
        store.setCurrentUser(user);
      }

      this.toast('success', 'Đã tải lên và cập nhật ảnh đại diện thành công!');
      this.renderAppForUser(user);
      this.renderProfile();
      event.target.value = '';
    };
    reader.readAsDataURL(file);
  },

  removeAvatar() {
    const user = store.currentUser;
    if (!user.avatar) return;
    delete user.avatar;

    const idx = store.data.users.findIndex(u => u.id === user.id);
    if (idx !== -1) {
      delete store.data.users[idx].avatar;
      store.save();
      store.setCurrentUser(user);
    }

    this.toast('info', 'Đã chuyển về ảnh đại diện chữ cái mặc định.');
    this.renderAppForUser(user);
    this.renderProfile();
  },

  saveProfile(event) {
    event.preventDefault();
    const user = store.currentUser;
    user.fullname = document.getElementById('prof-fullname').value.trim();
    user.title = document.getElementById('prof-title').value.trim();
    user.age = parseInt(document.getElementById('prof-age').value) || 20;
    user.department = document.getElementById('prof-department').value.trim();
    user.email = document.getElementById('prof-email').value.trim();
    user.phone = document.getElementById('prof-phone').value.trim();

    const idx = store.data.users.findIndex(u => u.id === user.id);
    if (idx !== -1) {
      store.data.users[idx] = { ...user };
      store.save();
      store.setCurrentUser(user);
    }

    this.toast('success', 'Đã lưu thông tin hồ sơ thành công!');
    this.renderAppForUser(user);
    this.renderProfile();
  },

  /* -------------------------------------------------------------
     STUDENT ROSTER (Teacher & Admin)
  -------------------------------------------------------------- */
  loadStudentList() {
    const searchVal = (document.getElementById('search-student-input')?.value || '').toLowerCase();
    const tbody = document.getElementById('student-table-body');
    if (!tbody) return;

    const students = store.data.users.filter(u => u.role === 'student');
    const filtered = students.filter(s => 
      s.fullname.toLowerCase().includes(searchVal) || 
      (s.code && s.code.toLowerCase().includes(searchVal)) ||
      (s.department && s.department.toLowerCase().includes(searchVal))
    );

    if (filtered.length === 0) {
      tbody.innerHTML = `<tr><td colspan="8" style="text-align:center;color:var(--text-dim);padding:30px;">Không tìm thấy sinh viên phù hợp.</td></tr>`;
      return;
    }

    tbody.innerHTML = filtered.map(s => `
      <tr ondblclick="app.openStudentTranscript('${s.id}')" style="cursor:pointer;" title="Nháy đúp chuột (Double click) để xem toàn bộ bảng điểm của ${s.fullname}">
        <td><strong style="color:var(--primary);">${s.code || 'SV-N/A'}</strong></td>
        <td>
          <div style="display:flex;align-items:center;gap:12px;">
            <div class="user-avatar-sm" style="width:36px;height:36px;font-size:13px;flex-shrink:0;${s.avatar ? 'cursor:pointer;border:2px solid var(--primary);box-shadow:0 0 10px rgba(249,115,22,0.35);' : ''}" ${s.avatar ? `onclick="event.stopPropagation(); app.previewAvatar('${s.id}')" title="Bấm để xem ảnh đại diện"` : ''}>
              ${s.avatar ? `<img src="${s.avatar}" alt="${s.fullname}">` : s.fullname.split(' ').pop().charAt(0)}
            </div>
            <div>
              <strong style="display:block;font-size:13.5px;">${s.fullname}</strong>
            </div>
          </div>
        </td>
        <td><span class="badge-role badge-student">${s.classGroup || s.title || 'K66'}</span></td>
        <td>${s.department || 'Công nghệ thông tin'}</td>
        <td>${s.email || '-'}</td>
        <td>${s.phone || '-'}</td>
        <td>${s.age || 20}</td>
        <td>
          <button onclick="event.stopPropagation(); app.openStudentTranscript('${s.id}')" class="btn btn-secondary btn-sm" style="padding:5px 10px;font-size:12px;" title="Xem toàn bộ bảng điểm các môn">
            <i class="fa-solid fa-graduation-cap" style="color:var(--primary);"></i> Bảng Điểm
          </button>
        </td>
      </tr>
    `).join('');
  },

  /* -------------------------------------------------------------
     ADMIN USER & PERMISSION MANAGEMENT (FULL CRUD & EDIT)
  -------------------------------------------------------------- */
  setAdminRoleFilter(role, btn) {
    this.adminRoleFilter = role;
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    this.loadAdminUsersView();
  },

  loadAdminUsersView() {
    const tbody = document.getElementById('admin-users-table-body');
    if (!tbody) return;

    const searchVal = (document.getElementById('admin-search-user-input')?.value || '').toLowerCase();
    let users = store.data.users;

    if (this.adminRoleFilter !== 'all') {
      users = users.filter(u => u.role === this.adminRoleFilter);
    }

    if (searchVal) {
      users = users.filter(u => 
        u.fullname.toLowerCase().includes(searchVal) ||
        u.username.toLowerCase().includes(searchVal) ||
        (u.code && u.code.toLowerCase().includes(searchVal)) ||
        (u.department && u.department.toLowerCase().includes(searchVal))
      );
    }

    if (users.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" style="text-align:center;color:var(--text-dim);padding:30px;">Không có tài khoản nào phù hợp.</td></tr>`;
      return;
    }

    tbody.innerHTML = users.map(u => `
      <tr>
        <td><strong style="color:var(--text-dim);font-size:12px;">${u.code || u.id}</strong></td>
        <td>
          <div style="display:flex;align-items:center;gap:12px;">
            <div class="user-avatar-sm" style="width:36px;height:36px;font-size:13px;flex-shrink:0;${u.avatar ? 'cursor:pointer;border:2px solid var(--primary);box-shadow:0 0 10px rgba(249,115,22,0.35);' : ''}" ${u.avatar ? `onclick="app.previewAvatar('${u.id}')" title="Bấm để xem ảnh đại diện"` : ''}>
              ${u.avatar ? `<img src="${u.avatar}" alt="${u.fullname}">` : u.fullname.split(' ').pop().charAt(0)}
            </div>
            <div>
              <strong style="display:block;font-size:13.5px;">${u.fullname}</strong>
              <span style="font-size:12px;color:var(--text-dim);">@${u.username}</span>
            </div>
          </div>
        </td>
        <td><span class="badge-role badge-${u.role}">${this.getRoleName(u.role)}</span></td>
        <td>${u.department || '-'}</td>
        <td>${u.email || '-'}</td>
        <td>
          ${u.status === 'locked' ? 
            '<span class="badge-role badge-admin"><i class="fa-solid fa-lock"></i> Đã khóa</span>' : 
            '<span class="badge-role badge-student"><i class="fa-solid fa-circle-check"></i> Hoạt động</span>'
          }
        </td>
        <td>
          <div style="display:flex;gap:6px;">
            <button onclick="app.openEditUserModal('${u.id}')" class="btn btn-secondary btn-sm" title="Chỉnh sửa thông tin & phân quyền">
              <i class="fa-solid fa-pen-to-square" style="color:var(--primary);"></i> Sửa
            </button>
            <button onclick="app.toggleUserLock('${u.id}')" class="btn btn-secondary btn-sm" title="${u.status === 'locked' ? 'Mở khóa' : 'Khóa tài khoản'}">
              <i class="fa-solid ${u.status === 'locked' ? 'fa-lock-open' : 'fa-lock'}" style="color:${u.status === 'locked' ? '#10b981' : '#f59e0b'};"></i>
            </button>
            <button onclick="app.deleteUser('${u.id}')" class="btn btn-danger btn-sm" ${u.id === store.currentUser.id ? 'disabled' : ''} title="Xóa tài khoản">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </td>
      </tr>
    `).join('');
  },

  showCreateUserModal() {
    document.getElementById('form-create-user').reset();
    this.openModal('modal-create-user');
  },

  handleCreateUser(event) {
    event.preventDefault();
    const username = document.getElementById('new-u-username').value.trim();
    const password = document.getElementById('new-u-password').value.trim();
    const role = document.getElementById('new-u-role').value;
    const fullname = document.getElementById('new-u-fullname').value.trim();
    const code = document.getElementById('new-u-code').value.trim();
    const department = document.getElementById('new-u-department').value.trim();
    const email = document.getElementById('new-u-email').value.trim();
    const phone = document.getElementById('new-u-phone').value.trim();

    if (store.data.users.some(u => u.username === username)) {
      this.toast('error', 'Tên đăng nhập này đã tồn tại!');
      return;
    }

    const newUser = {
      id: 'u_' + Date.now(),
      username,
      password,
      role,
      fullname,
      code: code || (role === 'student' ? 'SV' + Math.floor(100000 + Math.random()*900000) : 'GV' + Math.floor(100 + Math.random()*900)),
      department: department || (role === 'teacher' ? 'Khoa Công nghệ thông tin' : 'Lớp K66'),
      email: email || `${username}@university.edu.vn`,
      phone: phone || '0901 000 000',
      title: role === 'teacher' ? 'Giảng viên' : (role === 'admin' ? 'Quản trị viên' : 'Sinh viên'),
      age: role === 'teacher' ? 32 : (role === 'admin' ? 40 : 20),
      status: 'active'
    };

    store.data.users.push(newUser);
    store.save();

    this.closeModal('modal-create-user');
    this.toast('success', `Đã tạo tài khoản cho ${fullname} (${this.getRoleName(role)})!`);
    this.loadAdminUsersView();
  },

  openEditUserModal(userId) {
    const user = store.data.users.find(u => u.id === userId);
    if (!user) return;

    document.getElementById('edit-u-id').value = user.id;
    document.getElementById('edit-u-username').value = user.username;
    document.getElementById('edit-u-fullname').value = user.fullname;
    document.getElementById('edit-u-role').value = user.role;
    document.getElementById('edit-u-code').value = user.code || '';
    document.getElementById('edit-u-department').value = user.department || '';
    document.getElementById('edit-u-email').value = user.email || '';
    document.getElementById('edit-u-phone').value = user.phone || '';
    document.getElementById('edit-u-status').value = user.status || 'active';
    document.getElementById('edit-u-newpass').value = '';

    this.openModal('modal-edit-user');
  },

  handleUpdateUser(event) {
    event.preventDefault();
    const id = document.getElementById('edit-u-id').value;
    const user = store.data.users.find(u => u.id === id);
    if (!user) return;

    user.fullname = document.getElementById('edit-u-fullname').value.trim();
    user.role = document.getElementById('edit-u-role').value;
    user.code = document.getElementById('edit-u-code').value.trim();
    user.department = document.getElementById('edit-u-department').value.trim();
    user.email = document.getElementById('edit-u-email').value.trim();
    user.phone = document.getElementById('edit-u-phone').value.trim();
    user.status = document.getElementById('edit-u-status').value;

    const newPass = document.getElementById('edit-u-newpass').value.trim();
    if (newPass) {
      user.password = newPass;
    }

    store.save();

    // If edited current user, update session
    if (store.currentUser.id === user.id) {
      store.setCurrentUser(user);
      this.renderAppForUser(user);
    }

    this.closeModal('modal-edit-user');
    this.toast('success', `Đã cập nhật thông tin & quyền cho ${user.fullname}!`);
    this.loadAdminUsersView();
  },

  toggleUserLock(userId) {
    const u = store.data.users.find(user => user.id === userId);
    if (!u) return;
    if (u.id === store.currentUser.id) {
      this.toast('error', 'Không thể tự khóa tài khoản của chính mình!');
      return;
    }

    u.status = u.status === 'locked' ? 'active' : 'locked';
    store.save();
    this.toast('info', `Đã ${u.status === 'locked' ? 'tạm khóa' : 'mở khóa'} tài khoản @${u.username}`);
    this.loadAdminUsersView();
  },

  deleteUser(userId) {
    if (!confirm('Bạn có chắc chắn muốn xóa tài khoản này khỏi hệ thống?')) return;
    store.data.users = store.data.users.filter(u => u.id !== userId);
    store.save();
    this.toast('success', 'Đã xóa tài khoản khỏi hệ thống!');
    this.loadAdminUsersView();
  },

  /* -------------------------------------------------------------
     SCHEDULE VIEW (Weekly & Day Filter - 3 Roles)
  -------------------------------------------------------------- */
  loadScheduleView() {
    const week = document.getElementById('filter-week-select')?.value;
    const day = document.getElementById('filter-day-select')?.value;
    const container = document.getElementById('schedule-cards-container');
    const titleEl = document.getElementById('schedule-card-title');
    if (!container) return;

    const user = store.currentUser;
    let list = [...(store.data.schedules || [])];

    // Role-based title and base list filtering
    if (user.role === 'admin') {
      if (titleEl) titleEl.innerHTML = `<i class="fa-solid fa-calendar-days" style="color:var(--primary);"></i> Thời Khóa Biểu Toàn Trường (Quản Trị)`;
    } else if (user.role === 'teacher') {
      if (titleEl) titleEl.innerHTML = `<i class="fa-solid fa-calendar-days" style="color:var(--primary);"></i> Lịch Giảng Dạy Của Tôi`;
      list = list.filter(s => s.teacherId === user.id || s.teacherName.includes(user.fullname));
    } else if (user.role === 'student') {
      if (titleEl) titleEl.innerHTML = `<i class="fa-solid fa-calendar-days" style="color:var(--primary);"></i> Thời Khóa Biểu Cá Nhân`;
      const studentCourseIds = (store.data.enrollments || [])
        .filter(e => e.studentId === user.id)
        .map(e => e.courseId);
      list = list.filter(s => studentCourseIds.includes(s.courseId));
    }

    // Apply Week filter if selected
    if (week) {
      list = list.filter(s => s.week == week);
    }

    // Apply Day of Week filter if selected
    if (day) {
      list = list.filter(s => s.dayOfWeek === day);
    }

    // Handle Empty States cleanly
    if (list.length === 0) {
      if (user.role === 'student' && (!store.data.enrollments || store.data.enrollments.filter(e => e.studentId === user.id).length === 0)) {
        container.innerHTML = `
          <div class="card" style="padding: 36px 20px; text-align: center; grid-column: 1 / -1;">
            <i class="fa-solid fa-folder-open" style="font-size: 38px; color: var(--primary); margin-bottom: 12px; display: inline-block;"></i>
            <h4 style="font-size: 16px; font-weight: 700; margin-bottom: 6px;">Bạn chưa đăng ký môn học nào</h4>
            <p style="color: var(--text-muted); font-size: 13.5px; margin-bottom: 16px;">Vui lòng chuyển qua mục Đăng ký học phần để chọn các môn học trong kỳ.</p>
            <button onclick="app.switchSection('registration')" class="btn btn-primary btn-sm">
              <i class="fa-solid fa-folder-plus"></i> Đăng Ký Học Phần Ngay
            </button>
          </div>
        `;
      } else {
        container.innerHTML = `
          <div class="card" style="padding: 36px 20px; text-align: center; grid-column: 1 / -1;">
            <i class="fa-solid fa-calendar-xmark" style="font-size: 38px; color: var(--text-dim); margin-bottom: 12px; display: inline-block;"></i>
            <h4 style="font-size: 16px; font-weight: 700; margin-bottom: 6px;">Không có lịch học nào phù hợp</h4>
            <p style="color: var(--text-muted); font-size: 13.5px;">Hãy thử chọn tuần khác hoặc chọn "Tất cả các tuần" / "Tất cả các thứ".</p>
          </div>
        `;
      }
      return;
    }

    container.innerHTML = list.map(s => `
      <div class="card" style="display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:10px; gap: 8px;">
            <h4 style="font-size:15px; font-weight:700; line-height: 1.3;">${s.courseName}</h4>
            <span class="badge-role badge-teacher" style="flex-shrink: 0;">${s.courseCode}</span>
          </div>
          <div style="display:flex; align-items:center; gap:6px; font-size:13px; color:var(--primary); font-weight:600; margin-bottom:12px;">
            <i class="fa-solid fa-clock"></i> ${s.dayOfWeek} (${s.startTime} - ${s.endTime})
          </div>
        </div>
        <div style="font-size:13px; color:var(--text-muted); display:flex; flex-direction:column; gap:7px; border-top: 1px solid var(--border-subtle); padding-top: 10px;">
          <span><i class="fa-solid fa-location-dot" style="width:18px; color: var(--primary);"></i> Phòng: <strong>${s.room}</strong></span>
          <span><i class="fa-solid fa-chalkboard-user" style="width:18px; color: var(--primary);"></i> Giảng viên: <strong>${s.teacherName}</strong></span>
          <span><i class="fa-solid fa-calendar-week" style="width:18px; color: var(--primary);"></i> Tuần học số: <strong>${s.week}</strong></span>
        </div>
      </div>
    `).join('');
  },

  /* -------------------------------------------------------------
     ATTENDANCE SECTION (Teacher)
  -------------------------------------------------------------- */
  loadAttendanceView() {
    const user = store.currentUser;
    const select = document.getElementById('att-schedule-select');
    if (!select) return;

    const teacherSchedules = store.data.schedules.filter(s => s.teacherId === user.id || user.role === 'admin');
    select.innerHTML = '<option value="">-- Chọn lịch dạy / lớp học phần --</option>' + 
      teacherSchedules.map(s => `<option value="${s.id}">${s.courseName} - ${s.courseCode} (${s.dayOfWeek})</option>`).join('');

    this.loadStudentsForAttendance();
  },

  loadStudentsForAttendance() {
    const schedId = document.getElementById('att-schedule-select')?.value;
    const tbody = document.getElementById('attendance-table-body');
    if (!tbody) return;

    if (!schedId) {
      tbody.innerHTML = `<tr><td colspan="4" style="text-align:center;color:var(--text-dim);padding:24px;">Vui lòng chọn lớp học để tiến hành điểm danh.</td></tr>`;
      return;
    }

    const students = store.data.users.filter(u => u.role === 'student');
    tbody.innerHTML = students.map(s => `
      <tr>
        <td><strong style="color:var(--primary);">${s.code || 'SV001'}</strong></td>
        <td>
          <div style="display:flex;align-items:center;gap:10px;">
            <div class="user-avatar-sm" style="width:30px;height:30px;font-size:11px;${s.avatar ? 'cursor:pointer;border:1.5px solid var(--primary);' : ''}" ${s.avatar ? `onclick="app.previewAvatar('${s.id}')" title="Xem ảnh"` : ''}>
              ${s.avatar ? `<img src="${s.avatar}" alt="${s.fullname}">` : s.fullname.split(' ').pop().charAt(0)}
            </div>
            <span style="${s.avatar ? 'cursor:pointer;' : ''}" ${s.avatar ? `onclick="app.previewAvatar('${s.id}')"` : ''}>${s.fullname}</span>
          </div>
        </td>
        <td>
          <select id="att-status-${s.id}" class="form-input" style="width:160px;padding:6px 10px;">
            <option value="present" selected>✅ Có mặt</option>
            <option value="late">⏰ Đi muộn</option>
            <option value="excused">📝 Vắng có phép</option>
            <option value="absent">❌ Vắng không phép</option>
          </select>
        </td>
        <td>
          <input type="text" id="att-note-${s.id}" class="form-input" placeholder="Ghi chú nếu có..." style="padding:6px 10px;">
        </td>
      </tr>
    `).join('');
  },

  markAllPresent() {
    const students = store.data.users.filter(u => u.role === 'student');
    students.forEach(s => {
      const el = document.getElementById(`att-status-${s.id}`);
      if (el) el.value = 'present';
    });
    this.toast('success', 'Đã chọn tất cả sinh viên có mặt!');
  },

  submitAttendance() {
    const schedId = document.getElementById('att-schedule-select')?.value;
    const date = document.getElementById('att-date-input')?.value;

    if (!schedId) {
      this.toast('warning', 'Vui lòng chọn lớp học để lưu điểm danh.');
      return;
    }

    const students = store.data.users.filter(u => u.role === 'student');
    const records = students.map(s => ({
      studentId: s.id,
      status: document.getElementById(`att-status-${s.id}`)?.value || 'present',
      note: document.getElementById(`att-note-${s.id}`)?.value || ''
    }));

    store.data.attendance.push({
      id: 'att_' + Date.now(),
      scheduleId: schedId,
      date: date || new Date().toISOString().split('T')[0],
      records
    });
    store.save();

    this.toast('success', `Đã lưu kết quả điểm danh ngày ${date}!`);
  },

  /* -------------------------------------------------------------
     GRADING SECTION (Start Date & Deadline Management)
  -------------------------------------------------------------- */
  loadGradingView() {
    const select = document.getElementById('grading-course-select');
    if (!select) return;

    select.innerHTML = '<option value="">-- Chọn môn học --</option>' + 
      store.data.courses.map(c => `<option value="${c.id}">${c.name} (${c.code}) - ${c.credits} TC</option>`).join('');

    this.loadGradesForCourse();
  },

  loadGradesForCourse() {
    const courseId = document.getElementById('grading-course-select')?.value;
    const tbody = document.getElementById('grading-table-body');
    const deadlineBanner = document.getElementById('grade-deadline-banner');
    if (!tbody) return;

    if (!courseId) {
      if (deadlineBanner) deadlineBanner.style.display = 'none';
      tbody.innerHTML = `<tr><td colspan="7" style="text-align:center;color:var(--text-dim);padding:24px;">Vui lòng chọn môn học để xem và nhập điểm.</td></tr>`;
      return;
    }

    const course = store.data.courses.find(c => c.id === courseId);
    const startDate = course?.gradeStartDate || '2026-09-15';
    const endDate = course?.gradeEndDate || '2026-10-20';
    const today = new Date().toISOString().split('T')[0];
    
    const isPastDeadline = today > endDate;
    const isLocked = course?.gradeLocked || (isPastDeadline && store.currentUser.role !== 'admin');

    // Render Deadline Banner
    if (deadlineBanner) {
      deadlineBanner.style.display = 'block';
      deadlineBanner.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;padding:14px 18px;border-radius:var(--radius-md);background:var(--bg-subtle);border:1px solid var(--border-medium);margin-bottom:18px;">
          <div style="display:flex;align-items:center;gap:16px;flex-wrap:wrap;">
            <div style="font-size:13.5px;">
              <i class="fa-solid fa-calendar-check" style="color:var(--primary);margin-right:6px;"></i>
              <span>Ngày mở nhập điểm: <strong>${startDate}</strong></span>
            </div>
            <div style="font-size:13.5px;">
              <i class="fa-solid fa-calendar-xmark" style="color:#ef4444;margin-right:6px;"></i>
              <span>Ngày chốt sổ điểm: <strong>${endDate}</strong></span>
            </div>
            <div>
              ${isLocked ? 
                '<span class="badge-role badge-admin"><i class="fa-solid fa-lock"></i> Cổng điểm đã khóa</span>' : 
                '<span class="badge-role badge-student"><i class="fa-solid fa-circle-check"></i> Đang mở nhập điểm</span>'
              }
            </div>
          </div>
          ${store.currentUser.role === 'admin' ? `
            <button onclick="app.openGradeDeadlineModal('${course.id}')" class="btn btn-secondary btn-sm">
              <i class="fa-solid fa-gear" style="color:var(--primary);"></i> Cài Đặt Hạn Nhập Điểm
            </button>
          ` : (isLocked ? '<span style="font-size:12px;color:#ef4444;font-weight:600;"><i class="fa-solid fa-triangle-exclamation"></i> Đã hết hạn sửa điểm</span>' : '')}
        </div>
      `;
    }

    const students = store.data.users.filter(u => u.role === 'student');

    tbody.innerHTML = students.map(s => {
      let en = store.data.enrollments.find(e => e.studentId === s.id && e.courseId === courseId);
      const midterm = en?.midtermScore !== undefined ? en.midtermScore : 8.0;
      const finalS = en?.finalScore !== undefined ? en.finalScore : 8.5;
      const total = (midterm * 0.4 + finalS * 0.6).toFixed(1);
      const gradeLetter = this.calculateGradeLetter(parseFloat(total));

      return `
        <tr>
          <td><strong style="color:var(--primary);">${s.code || 'SV-001'}</strong></td>
          <td><strong>${s.fullname}</strong></td>
          <td>
            <input type="number" step="0.1" min="0" max="10" id="grade-mid-${s.id}" class="form-input" value="${midterm}" style="width:85px;padding:6px 10px;" oninput="app.recalcRowGrade('${s.id}')" ${isLocked && store.currentUser.role !== 'admin' ? 'disabled' : ''}>
          </td>
          <td>
            <input type="number" step="0.1" min="0" max="10" id="grade-final-${s.id}" class="form-input" value="${finalS}" style="width:85px;padding:6px 10px;" oninput="app.recalcRowGrade('${s.id}')" ${isLocked && store.currentUser.role !== 'admin' ? 'disabled' : ''}>
          </td>
          <td>
            <div style="display:flex;align-items:center;gap:8px;">
              <strong id="grade-total-${s.id}" style="font-size:15px;color:var(--primary);">${total}</strong>
              <span id="grade-letter-${s.id}" class="badge-role badge-student">${gradeLetter}</span>
            </div>
          </td>
          <td>
            <input type="text" id="grade-note-${s.id}" class="form-input" value="${en?.notes || ''}" placeholder="Nhận xét..." ${isLocked && store.currentUser.role !== 'admin' ? 'disabled' : ''}>
          </td>
          <td>
            <button onclick="app.saveSingleGrade('${s.id}', '${courseId}')" class="btn btn-primary btn-sm" ${isLocked && store.currentUser.role !== 'admin' ? 'disabled style="opacity:0.5;cursor:not-allowed;"' : ''}>
              <i class="fa-solid fa-floppy-disk"></i> Lưu
            </button>
          </td>
        </tr>
      `;
    }).join('');
  },

  openGradeDeadlineModal(courseId) {
    const course = store.data.courses.find(c => c.id === courseId);
    if (!course) return;

    document.getElementById('dl-course-id').value = course.id;
    document.getElementById('dl-course-name').innerText = `${course.name} (${course.code})`;
    document.getElementById('dl-start-date').value = course.gradeStartDate || '2026-09-15';
    document.getElementById('dl-end-date').value = course.gradeEndDate || '2026-10-20';
    document.getElementById('dl-locked').value = course.gradeLocked ? 'true' : 'false';

    this.openModal('modal-grade-deadline');
  },

  handleSaveGradeDeadline(event) {
    event.preventDefault();
    const courseId = document.getElementById('dl-course-id').value;
    const course = store.data.courses.find(c => c.id === courseId);
    if (!course) return;

    course.gradeStartDate = document.getElementById('dl-start-date').value;
    course.gradeEndDate = document.getElementById('dl-end-date').value;
    course.gradeLocked = document.getElementById('dl-locked').value === 'true';

    store.save();
    this.closeModal('modal-grade-deadline');
    this.toast('success', `Đã cập nhật thời hạn nhập điểm cho môn ${course.code}!`);
    this.loadGradesForCourse();
  },

  recalcRowGrade(studentId) {
    const mid = parseFloat(document.getElementById(`grade-mid-${studentId}`)?.value) || 0;
    const fin = parseFloat(document.getElementById(`grade-final-${studentId}`)?.value) || 0;
    const total = (mid * 0.4 + fin * 0.6).toFixed(1);
    const letter = this.calculateGradeLetter(parseFloat(total));

    const totalEl = document.getElementById(`grade-total-${studentId}`);
    const letterEl = document.getElementById(`grade-letter-${studentId}`);
    if (totalEl) totalEl.innerText = total;
    if (letterEl) letterEl.innerText = letter;
  },

  calculateGradeLetter(score) {
    if (score >= 8.5) return 'A';
    if (score >= 8.0) return 'B+';
    if (score >= 7.0) return 'B';
    if (score >= 6.5) return 'C+';
    if (score >= 5.5) return 'C';
    if (score >= 5.0) return 'D+';
    if (score >= 4.0) return 'D';
    return 'F';
  },

  getGpa4Scale(score10) {
    if (score10 >= 8.5) return 4.0;
    if (score10 >= 8.0) return 3.5;
    if (score10 >= 7.0) return 3.0;
    if (score10 >= 6.5) return 2.5;
    if (score10 >= 5.5) return 2.0;
    if (score10 >= 5.0) return 1.5;
    if (score10 >= 4.0) return 1.0;
    return 0.0;
  },

  getAcademicRanking(gpa10) {
    if (gpa10 >= 9.0) return { text: 'Xuất sắc', class: 'emerald' };
    if (gpa10 >= 8.0) return { text: 'Giỏi', class: 'emerald' };
    if (gpa10 >= 6.5) return { text: 'Khá', class: 'blue' };
    if (gpa10 >= 5.0) return { text: 'Trung bình', class: 'amber' };
    return { text: 'Yếu / Cảnh báo', class: 'admin' };
  },

  saveSingleGrade(studentId, courseId) {
    const mid = parseFloat(document.getElementById(`grade-mid-${studentId}`)?.value) || 0;
    const fin = parseFloat(document.getElementById(`grade-final-${studentId}`)?.value) || 0;
    const note = document.getElementById(`grade-note-${studentId}`)?.value || '';

    let en = store.data.enrollments.find(e => e.studentId === studentId && e.courseId === courseId);
    if (en) {
      en.midtermScore = mid;
      en.finalScore = fin;
      en.notes = note;
    } else {
      store.data.enrollments.push({
        id: 'en_' + Date.now(),
        studentId,
        courseId,
        midtermScore: mid,
        finalScore: fin,
        notes: note,
        tuitionPaid: true
      });
    }
    store.save();
    this.toast('success', 'Đã lưu điểm cho sinh viên!');
  },

  exportGradesToCSV() {
    const courseId = document.getElementById('grading-course-select')?.value;
    if (!courseId) {
      this.toast('warning', 'Vui lòng chọn môn học trước khi xuất file.');
      return;
    }

    const course = store.data.courses.find(c => c.id === courseId);
    let csv = `BẢNG ĐIỂM: ${course?.name} (${course?.code})\n`;
    csv += 'Mã SV,Họ và Tên,Điểm Giữa Kỳ (40%),Điểm Cuối Kỳ (60%),Điểm Tổng Kết,Điểm Chữ,Ghi Chú\n';

    const students = store.data.users.filter(u => u.role === 'student');
    students.forEach(s => {
      const en = store.data.enrollments.find(e => e.studentId === s.id && e.courseId === courseId);
      const mid = en?.midtermScore || 0;
      const fin = en?.finalScore || 0;
      const total = (mid * 0.4 + fin * 0.6).toFixed(1);
      const letter = this.calculateGradeLetter(parseFloat(total));
      csv += `"${s.code || ''}","${s.fullname}",${mid},${fin},${total},${letter},"${en?.notes || ''}"\n`;
    });

    const blob = new Blob(["\uFEFF" + csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `BangDiem_${course?.code || 'MonHoc'}.csv`;
    link.click();
    this.toast('success', 'Đã xuất file bảng điểm CSV thành công!');
  },

  /* -------------------------------------------------------------
     STUDENT REGISTRATION
  -------------------------------------------------------------- */
  loadRegistrationView() {
    const user = store.currentUser;
    const tbody = document.getElementById('registration-table-body');
    if (!tbody) return;

    tbody.innerHTML = store.data.courses.map(c => {
      const isRegistered = store.data.enrollments.some(e => e.studentId === user.id && e.courseId === c.id);

      return `
        <tr>
          <td><strong style="color:var(--primary);">${c.code}</strong></td>
          <td><strong>${c.name}</strong></td>
          <td><span class="badge-role badge-student">${c.credits} Tín chỉ</span></td>
          <td>${c.department}</td>
          <td style="color:var(--text-muted);font-size:12.5px;">${c.description || '-'}</td>
          <td>
            ${isRegistered ? `
              <button onclick="app.unregisterCourse('${c.id}')" class="btn btn-danger btn-sm">
                <i class="fa-solid fa-trash-can"></i> Hủy Môn
              </button>
            ` : `
              <button onclick="app.registerCourse('${c.id}')" class="btn btn-primary btn-sm">
                <i class="fa-solid fa-plus"></i> Đăng Ký
              </button>
            `}
          </td>
        </tr>
      `;
    }).join('');
  },

  registerCourse(courseId) {
    const user = store.currentUser;
    const exists = store.data.enrollments.find(e => e.studentId === user.id && e.courseId === courseId);
    if (exists) {
      this.toast('warning', 'Bạn đã đăng ký môn này rồi!');
      return;
    }

    store.data.enrollments.push({
      id: 'en_' + Date.now(),
      studentId: user.id,
      courseId: courseId,
      midtermScore: 0,
      finalScore: 0,
      notes: 'Mới đăng ký',
      tuitionPaid: false
    });
    store.save();

    this.toast('success', 'Đăng ký học phần thành công!');
    this.loadRegistrationView();
  },

  unregisterCourse(courseId) {
    const user = store.currentUser;
    store.data.enrollments = store.data.enrollments.filter(e => !(e.studentId === user.id && e.courseId === courseId));
    store.save();

    this.toast('info', 'Đã hủy đăng ký học phần.');
    this.loadRegistrationView();
  },

  /* -------------------------------------------------------------
     STUDENT TRANSCRIPTS & GPA (Double Click Detailed Grade Card)
  -------------------------------------------------------------- */
  loadMyGradesView() {
    const user = store.currentUser;
    const tbody = document.getElementById('my-grades-table-body');
    if (!tbody) return;

    const myEnrollments = store.data.enrollments.filter(e => e.studentId === user.id);
    if (myEnrollments.length === 0) {
      tbody.innerHTML = `<tr><td colspan="9" style="text-align:center;color:var(--text-dim);padding:30px;">Bạn chưa có kết quả môn học nào.</td></tr>`;
      return;
    }

    let totalCredits = 0;
    let weightedScore = 0;

    tbody.innerHTML = myEnrollments.map(e => {
      const c = store.data.courses.find(course => course.id === e.courseId);
      const credits = c?.credits || 3;
      const mid = e.midtermScore !== undefined ? e.midtermScore : 0;
      const fin = e.finalScore !== undefined ? e.finalScore : 0;
      const total = (mid * 0.4 + fin * 0.6).toFixed(1);
      const letter = this.calculateGradeLetter(parseFloat(total));

      totalCredits += credits;
      weightedScore += parseFloat(total) * credits;

      return `
        <tr ondblclick="app.showGradeDetailModal('${e.id}')" title="Nhấp đúp chuột để xem chi tiết thẻ điểm & nhận xét" style="cursor: pointer;">
          <td><strong style="color:var(--primary);">${c?.code || '-'}</strong></td>
          <td><strong>${c?.name || 'Môn học'}</strong></td>
          <td><span class="badge-role badge-student">${credits} TC</span></td>
          <td><strong>${mid}</strong></td>
          <td><strong>${fin}</strong></td>
          <td><strong style="color:var(--primary);font-size:15px;">${total}</strong></td>
          <td><span class="badge-role badge-teacher" style="font-weight:700;">${letter}</span></td>
          <td>
            <div style="max-width: 220px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-size:12.5px; color:var(--text-muted);" title="${e.notes || 'Không có nhận xét'}">
              ${e.notes || '<em>Chưa có nhận xét</em>'}
            </div>
          </td>
          <td>
            <button onclick="app.showGradeDetailModal('${e.id}')" class="btn btn-secondary btn-sm" title="Xem chi tiết thẻ điểm">
              <i class="fa-solid fa-expand" style="color:var(--primary);"></i> Chi tiết
            </button>
          </td>
        </tr>
      `;
    }).join('');

    const gpa10 = totalCredits > 0 ? (weightedScore / totalCredits).toFixed(2) : '0.00';
    const gpa4 = (parseFloat(gpa10) * 0.4).toFixed(2);
    
    const gpaEl = document.getElementById('student-gpa-summary');
    if (gpaEl) {
      gpaEl.innerText = `GPA: ${gpa4}/4.0 (Hệ 10: ${gpa10}) - Tổng tín chỉ: ${totalCredits}`;
    }
  },

  showGradeDetailModal(enrollmentId) {
    const e = store.data.enrollments.find(item => item.id === enrollmentId);
    if (!e) return;
    const c = store.data.courses.find(course => course.id === e.courseId);
    const mid = e.midtermScore !== undefined ? e.midtermScore : 0;
    const fin = e.finalScore !== undefined ? e.finalScore : 0;
    const total = (mid * 0.4 + fin * 0.6).toFixed(1);
    const letter = this.calculateGradeLetter(parseFloat(total));
    const gpa4 = (parseFloat(total) * 0.4).toFixed(2);

    let classification = 'Khá';
    if (parseFloat(total) >= 9.0) classification = 'Xuất sắc';
    else if (parseFloat(total) >= 8.0) classification = 'Giỏi';
    else if (parseFloat(total) >= 6.5) classification = 'Khá';
    else if (parseFloat(total) >= 5.0) classification = 'Trung bình';
    else classification = 'Chưa đạt / Cần học lại';

    const contentEl = document.getElementById('grade-detail-content');
    if (!contentEl) return;

    contentEl.innerHTML = `
      <div style="background: var(--bg-subtle); border: 1px solid var(--border-medium); border-radius: var(--radius-md); padding: 16px; margin-bottom: 16px;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 6px; gap: 8px;">
          <h4 style="font-size: 17px; font-weight: 700; color: var(--text-main);">${c?.name || 'Môn học'}</h4>
          <span class="badge-role badge-teacher" style="font-size: 12px; font-weight: 700;">${c?.code || '-'}</span>
        </div>
        <div style="display: flex; gap: 16px; font-size: 12.5px; color: var(--text-muted); flex-wrap: wrap;">
          <span><i class="fa-solid fa-graduation-cap" style="color: var(--primary);"></i> Số tín chỉ: <strong>${c?.credits || 3} Tín chỉ</strong></span>
          <span><i class="fa-solid fa-building-columns" style="color: var(--primary);"></i> Khoa: <strong>${c?.department || 'Công nghệ thông tin'}</strong></span>
          <span><i class="fa-solid fa-calendar-days" style="color: var(--primary);"></i> Học kỳ: <strong>${c?.semester || 'Học kỳ 1 - 2026'}</strong></span>
        </div>
      </div>

      <!-- Score Breakdown Grid -->
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 16px;">
        <div style="background: var(--bg-card); border: 1px solid var(--border-medium); border-radius: var(--radius-md); padding: 12px; text-align: center;">
          <div style="font-size: 11.5px; color: var(--text-dim); text-transform: uppercase; font-weight: 600;">Giữa kỳ (40%)</div>
          <div style="font-size: 20px; font-weight: 800; color: var(--text-main); margin-top: 4px;">${mid}</div>
        </div>
        <div style="background: var(--bg-card); border: 1px solid var(--border-medium); border-radius: var(--radius-md); padding: 12px; text-align: center;">
          <div style="font-size: 11.5px; color: var(--text-dim); text-transform: uppercase; font-weight: 600;">Cuối kỳ (60%)</div>
          <div style="font-size: 20px; font-weight: 800; color: var(--text-main); margin-top: 4px;">${fin}</div>
        </div>
        <div style="background: var(--primary-subtle); border: 1px solid var(--primary-border); border-radius: var(--radius-md); padding: 12px; text-align: center;">
          <div style="font-size: 11.5px; color: var(--primary); text-transform: uppercase; font-weight: 700;">Tổng Kết (Hệ 10)</div>
          <div style="font-size: 22px; font-weight: 800; color: var(--primary); margin-top: 2px;">${total}</div>
        </div>
      </div>

      <!-- Rating Badges Summary -->
      <div style="display: flex; gap: 10px; justify-content: space-between; align-items: center; background: var(--bg-subtle); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 12px 16px; margin-bottom: 16px; flex-wrap: wrap;">
        <div>
          <span style="font-size: 12.5px; color: var(--text-dim);">Điểm chữ:</span>
          <strong style="font-size: 16px; color: var(--primary); margin-left: 6px;">${letter}</strong>
        </div>
        <div>
          <span style="font-size: 12.5px; color: var(--text-dim);">Quy đổi Hệ 4:</span>
          <strong style="font-size: 15px; color: var(--text-main); margin-left: 6px;">${gpa4}/4.0</strong>
        </div>
        <div>
          <span style="font-size: 12.5px; color: var(--text-dim);">Xếp loại:</span>
          <span class="badge-role ${parseFloat(total) >= 8.0 ? 'badge-student' : 'badge-teacher'}" style="margin-left: 6px;">${classification}</span>
        </div>
      </div>

      <!-- Full Feedback / Notes Section (No truncation) -->
      <div>
        <label style="display: block; font-size: 13px; font-weight: 700; color: var(--text-main); margin-bottom: 6px;">
          <i class="fa-solid fa-comment-dots" style="color: var(--primary); margin-right: 4px;"></i> Đánh Giá & Nhận Xét Của Giảng Viên:
        </label>
        <div style="background: var(--bg-card); border: 1px solid var(--border-medium); border-radius: var(--radius-md); padding: 14px 16px; font-size: 13.5px; line-height: 1.6; color: var(--text-main); min-height: 70px; max-height: 180px; overflow-y: auto; white-space: pre-wrap;">
          ${e.notes ? e.notes : '<em style="color:var(--text-dim);">Chưa có nhận xét chi tiết cho học phần này.</em>'}
        </div>
      </div>
    `;

    this.openModal('modal-grade-detail');
  },

  /* -------------------------------------------------------------
     STUDENT TUITION PORTAL
  -------------------------------------------------------------- */
  loadTuitionView() {
    const user = store.currentUser;
    const tbody = document.getElementById('tuition-table-body');
    if (!tbody) return;

    const myEnrollments = store.data.enrollments.filter(e => e.studentId === user.id);
    let totalCredits = 0;
    let totalFee = 0;
    let isAllPaid = myEnrollments.length > 0;

    tbody.innerHTML = myEnrollments.map(e => {
      const c = store.data.courses.find(course => course.id === e.courseId);
      const credits = c?.credits || 3;
      const price = c?.pricePerCredit || 450000;
      const amount = credits * price;

      totalCredits += credits;
      totalFee += amount;
      if (!e.tuitionPaid) isAllPaid = false;

      return `
        <tr>
          <td><strong style="color:var(--primary);">${c?.code || '-'}</strong></td>
          <td><strong>${c?.name || 'Môn học'}</strong></td>
          <td>${credits} Tín chỉ</td>
          <td>${price.toLocaleString('vi-VN')} VNĐ</td>
          <td><strong style="color:#10b981;">${amount.toLocaleString('vi-VN')} VNĐ</strong></td>
          <td>
            ${e.tuitionPaid ? 
              '<span class="badge-role badge-student"><i class="fa-solid fa-circle-check"></i> Đã đóng</span>' : 
              '<span class="badge-role badge-admin"><i class="fa-solid fa-clock"></i> Chưa nộp</span>'
            }
          </td>
        </tr>
      `;
    }).join('');

    document.getElementById('tuition-total-credits').innerText = totalCredits;
    document.getElementById('tuition-total-fee').innerText = totalFee.toLocaleString('vi-VN') + ' VNĐ';
    
    const statusEl = document.getElementById('tuition-payment-status');
    if (statusEl) {
      if (myEnrollments.length === 0) {
        statusEl.innerText = 'Chưa đăng ký môn';
      } else if (isAllPaid) {
        statusEl.innerText = '✅ Đã hoàn thành học phí';
        statusEl.style.color = '#10b981';
      } else {
        statusEl.innerText = '⏳ Chờ thanh toán';
        statusEl.style.color = '#f59e0b';
      }
    }
  },

  payTuitionSimulation() {
    const user = store.currentUser;
    const myEnrollments = store.data.enrollments.filter(e => e.studentId === user.id);
    if (myEnrollments.length === 0) {
      this.toast('warning', 'Bạn chưa đăng ký môn học nào để nộp học phí!');
      return;
    }

    myEnrollments.forEach(e => e.tuitionPaid = true);
    store.save();

    this.toast('success', '🎉 Thanh toán học phí trực tuyến thành công! Biên lai đã được cập nhật.');
    this.loadTuitionView();
  },

  /* -------------------------------------------------------------
     ADMIN COURSES & SCHEDULE MANAGEMENT (CRUD)
  -------------------------------------------------------------- */
  loadAdminCoursesView() {
    const tbody = document.getElementById('admin-courses-table-body');
    if (!tbody) return;

    tbody.innerHTML = store.data.courses.map(c => {
      const pricePerCredit = c.pricePerCredit || 450000;
      const totalFee = (c.credits || 3) * pricePerCredit;
      return `
        <tr>
          <td><strong style="color:var(--primary);">${c.code}</strong></td>
          <td><strong>${c.name}</strong></td>
          <td><span class="badge-role badge-student">${c.credits} Tín chỉ</span></td>
          <td style="font-weight:600; color:var(--text-main);">${pricePerCredit.toLocaleString('vi-VN')} đ</td>
          <td style="font-weight:700; color:#10b981;">${totalFee.toLocaleString('vi-VN')} đ</td>
          <td>${c.department || 'Công nghệ thông tin'}</td>
          <td>${c.semester || 'Học kỳ 1 - 2026'}</td>
          <td>
            <button onclick="app.deleteCourse('${c.id}')" class="btn btn-danger btn-sm" title="Xóa môn học">
              <i class="fa-solid fa-trash"></i>
            </button>
          </td>
        </tr>
      `;
    }).join('');
  },

  showCreateCourseModal() {
    this.openModal('modal-create-course');
  },

  handleCreateCourse(event) {
    event.preventDefault();
    const code = document.getElementById('c-code').value.trim();
    const name = document.getElementById('c-name').value.trim();
    const credits = parseInt(document.getElementById('c-credits').value) || 3;
    const pricePerCredit = parseInt(document.getElementById('c-price-per-credit').value) || 450000;
    const dept = document.getElementById('c-dept').value.trim();
    const semester = document.getElementById('c-semester')?.value.trim() || 'Học kỳ 1 - 2026';

    store.data.courses.push({
      id: 'c_' + Date.now(),
      code,
      name,
      credits,
      pricePerCredit,
      department: dept || 'Công nghệ thông tin',
      semester,
      description: 'Môn học chương trình chính khóa.'
    });
    store.save();

    this.closeModal('modal-create-course');
    this.toast('success', `Đã thêm môn: ${name} (${code}) - ${pricePerCredit.toLocaleString('vi-VN')} đ/tín chỉ!`);
    this.loadAdminCoursesView();
  },

  deleteCourse(courseId) {
    if (!confirm('Bạn có chắc chắn muốn xóa môn học này?')) return;
    store.data.courses = store.data.courses.filter(c => c.id !== courseId);
    store.save();
    this.toast('success', 'Đã xóa môn học thành công!');
    this.loadAdminCoursesView();
  },

  showCreateScheduleModal() {
    const cSelect = document.getElementById('sch-course-select');
    const tSelect = document.getElementById('sch-teacher-select');
    if (cSelect) {
      cSelect.innerHTML = store.data.courses.map(c => `<option value="${c.id}">${c.name} (${c.code})</option>`).join('');
    }
    if (tSelect) {
      const teachers = store.data.users.filter(u => u.role === 'teacher');
      tSelect.innerHTML = teachers.map(t => `<option value="${t.id}">${t.fullname} (${t.code || 'GV'})</option>`).join('');
    }
    this.openModal('modal-create-schedule');
  },

  handleCreateSchedule(event) {
    event.preventDefault();
    const courseId = document.getElementById('sch-course-select').value;
    const teacherId = document.getElementById('sch-teacher-select').value;
    const room = document.getElementById('sch-room').value.trim();
    const day = document.getElementById('sch-day').value;
    const week = parseInt(document.getElementById('sch-week').value) || 1;
    const start = document.getElementById('sch-start').value.trim();
    const end = document.getElementById('sch-end').value.trim();

    const course = store.data.courses.find(c => c.id === courseId);
    const teacher = store.data.users.find(u => u.id === teacherId);

    store.data.schedules.push({
      id: 'sch_' + Date.now(),
      courseId,
      courseCode: course?.code || 'INT',
      courseName: course?.name || 'Môn học',
      teacherId,
      teacherName: teacher?.fullname || 'Giảng viên',
      room,
      dayOfWeek: day,
      week,
      startTime: start,
      endTime: end
    });
    store.save();

    this.closeModal('modal-create-schedule');
    this.toast('success', 'Đã xếp lịch giảng dạy thành công!');
    this.switchSection('schedule');
  },

  /* -------------------------------------------------------------
     STUDENT FULL TRANSCRIPT (DOUBLE CLICK IN STUDENT LIST)
  -------------------------------------------------------------- */
  openStudentTranscript(studentId) {
    const student = store.data.users.find(u => u.id === studentId);
    if (!student) {
      this.toast('warning', 'Không tìm thấy thông tin sinh viên.');
      return;
    }

    const container = document.getElementById('student-transcript-container');
    if (!container) return;

    // Get all enrollments for this student
    const enrollments = store.data.enrollments.filter(e => e.studentId === studentId);

    // Calculate GPA
    let totalCredits = 0;
    let weighted10Sum = 0;
    let weighted4Sum = 0;
    let totalTuition = 0;
    let paidTuition = 0;

    const courseRows = enrollments.map((en, index) => {
      const course = store.data.courses.find(c => c.id === en.courseId) || {
        code: 'INT000',
        name: 'Học phần bổ sung',
        credits: 3,
        creditPrice: 450000,
        department: student.department || 'CNTT'
      };

      const credits = course.credits || 3;
      const mid = en.midtermScore !== undefined ? en.midtermScore : 8.0;
      const fin = en.finalScore !== undefined ? en.finalScore : 8.0;
      const total10 = parseFloat((mid * 0.4 + fin * 0.6).toFixed(1));
      const letter = this.calculateGradeLetter(total10);
      const score4 = this.getGpa4Scale(total10);

      totalCredits += credits;
      weighted10Sum += total10 * credits;
      weighted4Sum += score4 * credits;

      const courseFee = (course.creditPrice || 450000) * credits;
      totalTuition += courseFee;
      if (en.tuitionPaid) paidTuition += courseFee;

      return `
        <tr>
          <td style="text-align:center;font-weight:600;color:var(--text-dim);">${index + 1}</td>
          <td><strong style="color:var(--primary);">${course.code}</strong></td>
          <td>
            <strong>${course.name}</strong>
            <span style="display:block;font-size:11.5px;color:var(--text-dim);">${course.department || ''}</span>
          </td>
          <td style="text-align:center;"><span class="badge-role badge-student">${credits} TC</span></td>
          <td style="text-align:center;font-weight:600;">${mid}</td>
          <td style="text-align:center;font-weight:600;">${fin}</td>
          <td style="text-align:center;">
            <strong style="font-size:14.5px;color:var(--primary);">${total10}</strong>
          </td>
          <td style="text-align:center;">
            <span class="badge-role badge-${total10 >= 8.0 ? 'student' : (total10 >= 6.5 ? 'teacher' : 'admin')}">${letter}</span>
          </td>
          <td style="text-align:center;font-weight:700;">${score4.toFixed(1)}</td>
          <td style="text-align:center;">
            ${en.tuitionPaid ? 
              '<span class="badge-role badge-student"><i class="fa-solid fa-check"></i> Đã nộp</span>' : 
              '<span class="badge-role badge-admin"><i class="fa-solid fa-clock"></i> Chưa nộp</span>'
            }
          </td>
          <td style="font-size:12.5px;color:var(--text-muted);">${en.notes || 'Đạt yêu cầu học phần'}</td>
        </tr>
      `;
    }).join('');

    const gpa10 = totalCredits > 0 ? (weighted10Sum / totalCredits).toFixed(2) : '0.00';
    const gpa4 = totalCredits > 0 ? (weighted4Sum / totalCredits).toFixed(2) : '0.00';
    const ranking = this.getAcademicRanking(parseFloat(gpa10));

    container.innerHTML = `
      <!-- Student Banner & Summary KPI -->
      <div style="background:var(--bg-subtle);border:1px solid var(--border-medium);border-radius:var(--radius-lg);padding:18px;margin-bottom:20px;">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:16px;margin-bottom:18px;">
          <div style="display:flex;align-items:center;gap:14px;">
            <div class="user-avatar-sm" style="width:56px;height:56px;font-size:20px;flex-shrink:0;${student.avatar ? 'cursor:pointer;border:2px solid var(--primary);box-shadow:0 0 12px rgba(249,115,22,0.4);' : ''}" ${student.avatar ? `onclick="app.previewAvatar('${student.id}')" title="Bấm để xem phóng to ảnh đại diện"` : ''}>
              ${student.avatar ? `<img src="${student.avatar}" alt="${student.fullname}">` : student.fullname.split(' ').pop().charAt(0)}
            </div>
            <div>
              <h3 style="font-size:18px;margin-bottom:4px;display:flex;align-items:center;gap:8px;">
                ${student.fullname}
                <span class="badge-role badge-student" style="font-size:11px;">${student.code || 'SV-N/A'}</span>
              </h3>
              <div style="display:flex;align-items:center;gap:12px;font-size:12.5px;color:var(--text-muted);flex-wrap:wrap;">
                <span><i class="fa-solid fa-building-columns" style="color:var(--primary);"></i> ${student.department || 'Công nghệ thông tin'}</span>
                <span><i class="fa-solid fa-graduation-cap"></i> ${student.classGroup || student.title || 'K66'}</span>
                <span><i class="fa-solid fa-envelope"></i> ${student.email || '-'}</span>
              </div>
            </div>
          </div>
          <div style="display:flex;align-items:center;gap:8px;">
            <span class="badge-role badge-${ranking.class === 'emerald' ? 'student' : (ranking.class === 'blue' ? 'teacher' : 'admin')}" style="font-size:13px;padding:6px 14px;font-weight:700;">
              <i class="fa-solid fa-medal"></i> Xếp loại: ${ranking.text}
            </span>
          </div>
        </div>

        <!-- 4 Stat Summary Cards -->
        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(160px, 1fr));gap:12px;">
          <div style="background:var(--bg-card);padding:12px 14px;border-radius:var(--radius-md);border:1px solid var(--border-subtle);text-align:center;">
            <span style="font-size:12px;color:var(--text-dim);display:block;">GPA Điểm Hệ 10</span>
            <strong style="font-size:22px;color:var(--primary);">${gpa10}</strong>
            <span style="font-size:11px;color:var(--text-dim);display:block;">Thang điểm 10.0</span>
          </div>
          <div style="background:var(--bg-card);padding:12px 14px;border-radius:var(--radius-md);border:1px solid var(--border-subtle);text-align:center;">
            <span style="font-size:12px;color:var(--text-dim);display:block;">GPA Điểm Hệ 4</span>
            <strong style="font-size:22px;color:#10b981;">${gpa4}</strong>
            <span style="font-size:11px;color:var(--text-dim);display:block;">Thang điểm 4.0</span>
          </div>
          <div style="background:var(--bg-card);padding:12px 14px;border-radius:var(--radius-md);border:1px solid var(--border-subtle);text-align:center;">
            <span style="font-size:12px;color:var(--text-dim);display:block;">Tín Chỉ Tích Lũy</span>
            <strong style="font-size:22px;color:var(--text-main);">${totalCredits}</strong>
            <span style="font-size:11px;color:var(--text-dim);display:block;">${enrollments.length} Môn học</span>
          </div>
          <div style="background:var(--bg-card);padding:12px 14px;border-radius:var(--radius-md);border:1px solid var(--border-subtle);text-align:center;">
            <span style="font-size:12px;color:var(--text-dim);display:block;">Học Phí Tích Lũy</span>
            <strong style="font-size:16px;color:#3b82f6;line-height:28px;">${paidTuition.toLocaleString('vi-VN')} đ</strong>
            <span style="font-size:11px;color:${paidTuition >= totalTuition ? '#10b981' : '#ef4444'};display:block;">
              ${paidTuition >= totalTuition ? '✅ Đã hoàn thành' : '⚠️ Còn nợ học phí'}
            </span>
          </div>
        </div>
      </div>

      <!-- Detailed Transcript Table -->
      <div class="table-wrapper" style="border:1px solid var(--border-subtle);border-radius:var(--radius-md);overflow-x:auto;">
        <table class="data-table" style="margin:0;">
          <thead>
            <tr>
              <th style="width:40px;text-align:center;">STT</th>
              <th>Mã Môn</th>
              <th>Tên Môn Học</th>
              <th style="text-align:center;">Tín Chỉ</th>
              <th style="text-align:center;">Giữa Kỳ (40%)</th>
              <th style="text-align:center;">Cuối Kỳ (60%)</th>
              <th style="text-align:center;">Tổng Kết (10)</th>
              <th style="text-align:center;">Điểm Chữ</th>
              <th style="text-align:center;">Hệ 4</th>
              <th style="text-align:center;">Học Phí</th>
              <th>Đánh Giá & Nhận Xét</th>
            </tr>
          </thead>
          <tbody>
            ${enrollments.length > 0 ? courseRows : `
              <tr>
                <td colspan="11" style="text-align:center;padding:30px;color:var(--text-dim);">
                  Sinh viên chưa đăng ký hoặc chưa có điểm học phần nào.
                </td>
              </tr>
            `}
          </tbody>
        </table>
      </div>
    `;

    this.openModal('modal-student-transcript');
  },

  printStudentTranscript() {
    window.print();
  },

  /* -------------------------------------------------------------
     AVATAR LIGHTBOX & INTERACTIVE ZOOM IN / ZOOM OUT CONTROLLER
  -------------------------------------------------------------- */
  currentAvatarZoom: 1.0,
  currentAvatarRotation: 0,

  previewAvatar(userId) {
    const user = store.data.users.find(u => u.id === userId);
    if (!user) return;

    if (!user.avatar) {
      this.toast('info', `Sinh viên / Người dùng ${user.fullname} chưa tải lên ảnh đại diện cá nhân.`);
      return;
    }

    const titleEl = document.getElementById('avatar-preview-title');
    const subtitleEl = document.getElementById('avatar-preview-subtitle');
    const imgEl = document.getElementById('avatar-preview-img');

    if (titleEl) titleEl.textContent = `Hồ Sơ Ảnh: ${user.fullname}`;
    if (subtitleEl) subtitleEl.textContent = `${user.code ? user.code + ' • ' : ''}${this.getRoleName(user.role)} • ${user.department || user.classGroup || 'Trường Đại Học'}`;
    if (imgEl) {
      imgEl.src = user.avatar;
      imgEl.alt = user.fullname;
    }

    this.resetAvatarZoom();
    this.openModal('modal-avatar-preview');
  },

  zoomAvatar(delta) {
    this.currentAvatarZoom = Math.min(Math.max(0.4, +(this.currentAvatarZoom + delta).toFixed(2)), 4.0);
    this.applyAvatarTransform();
  },

  resetAvatarZoom() {
    this.currentAvatarZoom = 1.0;
    this.currentAvatarRotation = 0;
    this.applyAvatarTransform();
  },

  rotateAvatar(deg = 90) {
    this.currentAvatarRotation = (this.currentAvatarRotation + deg) % 360;
    this.applyAvatarTransform();
  },

  handleAvatarWheel(event) {
    if (event) {
      event.preventDefault();
      const delta = event.deltaY < 0 ? 0.2 : -0.2;
      this.zoomAvatar(delta);
    }
  },

  applyAvatarTransform() {
    const img = document.getElementById('avatar-preview-img');
    if (img) {
      img.style.transform = `scale(${this.currentAvatarZoom})`;
    }
  },

  /* -------------------------------------------------------------
     FLOATING CONTACT WIDGET (from thanhdatxxx/chuyende2)
  -------------------------------------------------------------- */
  toggleContactWidget() {
    const subMenu = document.getElementById('floating-sub-menu');
    if (subMenu) {
      subMenu.classList.toggle('open');
    }
  },

  /* -------------------------------------------------------------
     MODAL CONTROLS
  -------------------------------------------------------------- */
  openModal(modalId) {
    const m = document.getElementById(modalId);
    if (m) m.classList.add('show');
  },

  closeModal(modalId) {
    const m = document.getElementById(modalId);
    if (m) m.classList.remove('show');
  }
};

// Initialize Application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  app.init();
});
